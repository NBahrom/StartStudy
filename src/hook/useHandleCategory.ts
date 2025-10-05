import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setSelectedTag } from "../store/blogCategoriesSlice";
import { WPTag, WPTermTag  } from "../types/wordpress";

/**
 * Custom hook that returns a function to handle blog category clicks.
 */
export function useHandleCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleCategory = (tag: WPTag | WPTermTag) => {
    // If not already on /blog, navigate there
    if (location.pathname !== "/blog") {
      navigate("/blog", { state: { scrollAfterPosts: true } });
    }

    // Update selected category in Redux
    dispatch(setSelectedTag(tag));
  };

  return handleCategory;
}
