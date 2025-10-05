// src/util/useFetch.ts
import { useEffect, useState } from "react";

interface UseFetchOptions {
  endpoint: string; // e.g. "posts", "tags"
  params?: Record<string, any>;
  enabled?: boolean;
}

export function useFetch<T>({ endpoint, params = {}, enabled = true }: UseFetchOptions) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    if (!enabled) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const buildQuery = () => {
      const q = new URLSearchParams();
      Object.entries(params || {}).forEach(([k, v]) => {
        if (v === undefined || v === null) return;
        // If value is an array, append multiple times
        if (Array.isArray(v)) {
          v.forEach((item) => q.append(k, String(item)));
        } else {
          q.append(k, String(v));
        }
      });
      return q.toString();
    };

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const queryString = buildQuery();
        const url = `${apiUrl}${endpoint}${queryString ? `?${queryString}` : ""}`;
        const res = await fetch(url, { signal });

        if (!res.ok) {
          throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
        }

        // Read WP pagination headers
        const tp = Number(res.headers.get("X-WP-TotalPages") || 1);
        const total = Number(res.headers.get("X-WP-Total") || 0);
        setTotalPages(Number.isFinite(tp) ? tp : 1);
        setTotalItems(Number.isFinite(total) ? total : 0);

        const json = await res.json();
        // Ensure data is array
        setData(json);
      } catch (err: any) {
        if (!(err instanceof DOMException)) {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, JSON.stringify(params), enabled]);

  return { data, loading, error, totalPages, totalItems };
}
