import { useEffect, useState } from "react";

export function AuthorImage({ id, className }: { id: number, className?: string }) {
  const [url, setUrl] = useState<string | null>(null);
  const [alt, setAlt] = useState<string>("");

  useEffect(() => {
    if (!id) return;
    fetch(`https://blog.startstudy.cz/wp-json/wp/v2/media/${id}`)
      .then(res => res.json())
      .then(data => {
        setUrl(data.source_url);
        setAlt(data.alt_text || "Author image");
      })
      .catch(err => console.error("Failed to load media", err));
  }, [id]);

  if (!url) return null;

  return <img src={url} alt={alt} className={className} />;
}
