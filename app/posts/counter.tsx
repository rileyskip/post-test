"use client";

import { useState, useEffect } from "react";

export default function Counter() {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    setViewCount((prev) => prev + 1);
  }, []);
  return (
    <p className="text-sm text-red-500 ">
      <span className="font-bold">{viewCount}</span> Views
    </p>
  );
}
