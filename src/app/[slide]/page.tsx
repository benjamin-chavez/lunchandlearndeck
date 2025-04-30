import React from "react";
import Link from "next/link";
import SlideDemo from "@/app/[slide]/slide-demo";
import {Navigation} from "@/app/_components/navigation";

async function Page({
	params,
}: {
	params: Promise<{ slide: string }>;
}) {
	// @ts-ignore
	const slide = await params;
	console.log('params',slide);

	return (
		<div>
            <SlideDemo slide={slide.slide}/>

			<div className="mt-40"><Navigation slide={slide.slide}/></div>
		</div>
	);
}

export default Page;
