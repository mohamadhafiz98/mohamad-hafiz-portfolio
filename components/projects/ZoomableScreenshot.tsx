"use client";

import Image from "next/image";

type ZoomableScreenshotProps = {
  src: string;
  alt: string;
};

export default function ZoomableScreenshot({ src, alt }: ZoomableScreenshotProps) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-4 block w-full overflow-hidden rounded-xl border border-[#d8d8d3] bg-[#f5f5f3] p-4 text-left motion-ui hover:-translate-y-[0.5px]"
      aria-label="Open full-size project screenshot in new tab"
    >
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={875}
        className="h-auto w-full cursor-zoom-in rounded-lg border border-[#e0e0dc] object-cover motion-ui group-hover:scale-[1.01]"
      />
    </a>
  );
}
