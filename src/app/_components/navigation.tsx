import Link from "next/link";
import React from "react";

export function Navigation({ slide }: { slide: number }) {
	return (
		<div className="w-full mt-20 flex justify-between">
			<Link
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href={`./${Number(slide) - 1}`}
			>
				← Prev
			</Link>

			<Link
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href={`./${Number(slide) + 1}`}
			>
				Next →
			</Link>
		</div>
	);
}
