// import React from "react";
// import Link from "next/link";
//
// // export function Slide1({
// // 	title,
// // 	bullets,
// // }: { title: string; bullets: string[] }) {
// // 	return (
// // 		<div>
// // 			<h1 className="font-[family-name:var(--font-geist-mono)] font-sm text-5xl text-start">
// // 				{title}
// // 			</h1>
// // 			<ul className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] mt-10">
// // 				{bullets.map((bullet) => (
// // 					<li className="mb-2 tracking-[-.01em]">{bullet}</li>
// // 				))}
// // 			</ul>
// // 		</div>
// // 	);
// // }
// //
// // const notes = [
// // 	{
// // 		title: "Dynamic vs. Static Typing",
// // 		bullets: [
// // 			"Save and see your changes instantly.",
// // 			"What is wrong with this code?",
// // 		],
// // 		Component: ()=>{
// // 			return (<p>What is wrong with this code?</p>)
// // 		}
// // 	},
// // 	{
// // 		title: "Dynamic vs. Static Typing",
// // 		bullets: [
// // 			"Save and see your changes instantly.",
// // 			"Save and see your changes instantly.",
// // 		],
// // 	},
// // ];
// //
// // async function Page({
// // 	params,
// // }: {
// // 	params: Promise<{ slug: string }>;
// // }) {
// // 	// @ts-ignore
// // 	const { slide } = await params;
// //
// // 	const title = notes[slide].title;
// // 	const bullets = notes[slide].bullets;
// //
// // 	return (
// // 		<div>
// // 			{" "}
// // 			<Slide1 bullets={bullets} title={title} />{" "}
// // 			{notes[slide].Component}
// // 		</div>
// // 	);
// // }
// //
// // export default Page;
//
// function SlideDemo() {
// 	const notes = [
// 		{
// 			title: "Dynamic vs. Static Typing",
// 			bullets: [
// 				"Save and see your changes instantly.",
// 				"What is wrong with this code?",
// 			],
// 			Component: function () {
// 				return (
// 					<>
// 						<tabs>
// 							<tab>version 1</tab>
// 							<tab>version2</tab>
// 							<content><img src="slide1-code-snippet1" alt=""/></content>
// 							<
// 							<content><img src="slide2-code-snippet1" alt=""/>
// 						</content>
// 					</tabs>
//
// 			</>
// 			)
// 				;
// 			},
// 		},
// 		{
// 			title: "Dynamic vs. Static Typing",
// 			bullets: [
// 				"Save and see your changes instantly.",
// 				"Save and see your changes instantly.",
// 			],
// 		},
// 	];
//
// 	// Using the first slide by default
// 	const slide = 0;
// 	const title = notes[slide].title;
// 	const bullets = notes[slide].bullets;
// 	const SlideComponent = notes[slide].Component;
//
// 	return (
// 		<div className="p-8 max-w-4xl mx-auto">
// 			<div
// 				// border
// 				className="mb-8  p-6 rounded-lg shadow-sm"
// 			>
// 				<h1 className="font-mono text-5xl text-start mb-6">{title}</h1>
// 				<ul className="list-decimal pl-8 text-sm font-mono mt-10">
// 					{bullets.map((bullet, index) => (
// 						<li key={index} className="mb-2 tracking-tight">
// 							{bullet}
// 						</li>
// 					))}
// 				</ul>
// 			</div>
//
// 			{SlideComponent && <SlideComponent />}
// 		</div>
// 	);
// }
//
// export default SlideDemo;
'use client';
import React, { useState } from 'react';

// Dynamic tabs component
function Tabs({ items }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-8">
      <div className="flex border-b">
        {items.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 cursor-pointer font-mono text-sm ${
              activeTab === index
                ? 'border-b-2 border-blue-500 font-medium'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div className="p-2">{items[activeTab]?.content}</div>
      </div>
    </div>
  );
}

function SlideDemo({ slide }: { slide: string }) {
  // Data structure for slides with dynamic tab configuration
  const totalSlides = 3;
  const slides = [
    {
      title: 'Dynamic vs. Static Typing',
      bullets: [
        'Save and see your changes instantly.',
        'What is wrong with this code?',
      ],
      // Define tab count and base filename for each slide
      tabConfig: {
        count: 3,
        filePrefix: '1',
      },
    },
    {
      title: 'Static Type Checking',
      bullets: [
        'Catch errors before runtime.',
        'Improve code maintainability.',
      ],
      tabConfig: {
        count: 3,
        filePrefix: '2',
      },
    },
    // Example of a slide with different number of tabs
    {
      title: 'Type Inference',
      bullets: [
        'Let the compiler figure out types.',
        'Modern approach to typing.',
      ],
      tabConfig: {
        count: 4, // This slide has 4 tabs instead of 3
        filePrefix: '3',
      },
    },
  ];

  // Helper function to create tabs based on configuration
  const createTabs = (config) => {
    return Array.from({ length: config.count }, (_, i) => {
      const exampleNumber = i + 1;
      return {
        title: `Example ${exampleNumber}`,
        content: (
          <div className="p-4 rounded w-full">
            <img src={`${config.filePrefix}.${exampleNumber}.png`} alt="" />
          </div>
        ),
      };
    });
  };

  if (slide >= totalSlides) {
    return <div>End</div>;
  }

  // Using the first slide by default
  const slideIndex = slide;
  const currentSlide = slides[slideIndex];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8 p-6 rounded-lg">
        <h1 className="font-mono text-5xl text-start mb-6">
          {currentSlide.title}
        </h1>
        <ul className="list-decimal pl-8 text-sm font-mono mt-10">
          {currentSlide.bullets.map((bullet, index) => (
            <li key={index} className="mb-2 tracking-tight">
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* Generate tabs dynamically based on slide configuration */}
      <Tabs items={createTabs(currentSlide.tabConfig)} />
    </div>
  );
}

export default SlideDemo;
