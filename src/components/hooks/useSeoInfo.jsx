// hooks/useSeoInfo.js
import { useMemo } from "react";

export default function useSeoInfo(seoData, subProductId) {
  return useMemo(() => {
    const seoInfo = seoData.find((seo) => seo.id === subProductId)
      ?.seoInfo?.[0];
    return (
      seoInfo || {
        title: "Fallback Title",
        description: "Fallback Description",
        keywords: "default, keywords",
      }
    );
  }, [seoData, subProductId]);
}
