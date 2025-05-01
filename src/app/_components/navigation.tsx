import Link from "next/link";
import React from "react";
import clsx from "clsx";

export function Navigation({
  slide,
  isRoot = false,
}: {
  slide: number;
  isRoot?: boolean;
}) {
  return (
    <div
      className={clsx(
        "w-full mt-48 flex justify-between ",
        isRoot ? "justify-end" : "",
      )}
    >
      {!isRoot ? (
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={`./${Number(slide) - 1}`}
        >
          ← Prev
        </Link>
      ) : null}

      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={`./${Number(slide) + 1}`}
      >
        Next →
      </Link>
    </div>
  );
}
