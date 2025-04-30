"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
// import {A11y Dark} from 'react-code-blocks'
import { CodeBlock, nord } from "react-code-blocks";
const MyCodeComponent = () => (
	<CodeBlock text="HELLO WORLD" theme={nord} language="text" />
);

const CodeSnippet = ({ code, language }) => {
	return (
		<SyntaxHighlighter
			language={language}
			style={vscDarkPlus}
			showLineNumbers={true}
			wrapLines={true}
		>
			{code}
		</SyntaxHighlighter>
	);
};

function PythonLogo() {
	return (
		<svg
			// width="150px"
			// height="150px"
			viewBox="-3.2 -3.2 38.40 38.40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke=""
			transform="matrix(1, 0, 0, 1, 0, 0)"
			stroke-width="0.00032"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke="#CCCCCC"
				stroke-width="3.3280000000000003"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z"
					fill="url(#paint0_linear_87_8204)"
				></path>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z"
					fill="url(#paint1_linear_87_8204)"
				></path>
				<defs>
					<linearGradient
						id="paint0_linear_87_8204"
						x1="12.4809"
						y1="2"
						x2="12.4809"
						y2="22.7407"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#0060CC"></stop>
						<stop offset="1" stop-color="#002D64"></stop>
					</linearGradient>
					<linearGradient
						id="paint1_linear_87_8204"
						x1="19.519"
						y1="9.25928"
						x2="19.519"
						y2="30"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FE001E"></stop>
						<stop offset="1" stop-color="#B5000B"></stop>
					</linearGradient>
				</defs>
			</g>
		</svg>
	);
}

function Navigation({ slide }: { slide: number }) {
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

export default function Home() {
	const slide = 0;

	const sampleCode = `function helloWorld() {
	console.log("Hello, world!");
	return true;
}`;

	return (
		<div
		//grid grid-rows-[20px_1fr_20px] items-center justify-items-center
		// className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between "
		>
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start h-full">
				<h1 className="font-[family-name:var(--font-geist-mono)] font-sm text-7xl text-start">
					Static Type Checking
					{/*<div className="flex items-center ">*/}
					<span className="text-7xl flex">
						{" "}
						Mario on <span className="text-[#0060CC]">:</span>my
						{/*<span className="text-[#0060CC]">:</span> */}
						<span className="text-[#0060CC]">[</span>py
						<span className="text-[#0060CC]">]</span>{" "}
						<div className="size-24 -mt-2">
							<PythonLogo />
						</div>
					</span>
					{/*</div>*/}
				</h1>

				{/*<BulletPoints/>*/}
				<div className="w-full flex items-center justify-center my-10">
					<img
						// className="dark:invert"
						// className="dark:invert"
						src="/mario-on-mypy.jpg"
						alt="Vercel logomark"
						width={500}
						height={500}
					/>
				</div>
				{/*<img*/}
				{/*	// className="dark:invert"*/}
				{/*	src="/codeimage-snippet_30.svg"*/}
				{/*	// width={500}*/}
				{/*	// height={500}*/}
				{/*	// fill*/}
				{/*/>*/}
				{/*<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">*/}

				<Navigation slide={slide} />
			</main>
			{/*</footer>*/}
		</div>
	);
}
