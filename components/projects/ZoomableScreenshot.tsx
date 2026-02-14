"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ZoomableScreenshotProps = {
  src: string;
  alt: string;
};

export default function ZoomableScreenshot({ src, alt }: ZoomableScreenshotProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group mt-4 block w-full overflow-hidden rounded-xl border border-[#d8d8d3] bg-[#f5f5f3] p-4 text-left motion-ui hover:-translate-y-[0.5px]"
        aria-label="Zoom project screenshot"
      >
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={875}
          className="h-auto w-full rounded-lg border border-[#e0e0dc] object-cover motion-ui group-hover:scale-[1.01]"
        />
        <span className="mt-3 inline-block text-xs uppercase tracking-[0.16em] text-[#666666]">
          Click to zoom
        </span>
      </button>

      {isOpen ? (
        <div
          className="modal-overlay-enter fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-panel-enter relative w-full max-w-6xl rounded-xl border border-[#d8d8d3] bg-[#f5f5f3] p-3 md:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 rounded-md border border-[#d8d8d3] bg-white px-3 py-1 text-xs font-medium text-[#111111] motion-fast hover:opacity-85"
              aria-label="Close zoomed screenshot"
            >
              Close
            </button>

            <Image
              src={src}
              alt={alt}
              width={1800}
              height={1125}
              className="h-auto max-h-[85vh] w-full rounded-lg object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
