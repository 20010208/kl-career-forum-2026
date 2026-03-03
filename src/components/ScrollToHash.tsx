"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ScrollToHashInner() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("scroll") !== "entry") return;

    // ページ最上部から開始
    window.scrollTo({ top: 0, behavior: "instant" });

    // レンダリング完了後にスムーズスクロール
    const timer = setTimeout(() => {
      const el = document.getElementById("entry");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  return null;
}

export default function ScrollToHash() {
  return (
    <Suspense fallback={null}>
      <ScrollToHashInner />
    </Suspense>
  );
}
