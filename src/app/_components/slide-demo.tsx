"use client";

import React, { useState } from "react";

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
                ? "border-b-2 border-blue-500 font-medium"
                : "text-gray-600 hover:text-gray-800"
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
  const totalSlides = 3;

  const slides = [
    {
      title: "Dynamic vs. Static Typing",
      bullets: [
        "Save and see your changes instantly.",
        "What is wrong with this code?",
      ],
      tabImages: ["image-0.0.svg", "image-0.1.svg"],
    },
    {
      title: "Static Type Checking",
      bullets: [
        "Catch errors before runtime.",
        "Improve code maintainability.",
      ],
      tabImages: ["image-1.0.svg", "image-1.1.svg"],
    },
    {
      title: "Type Inference",
      bullets: [
        "Let the compiler figure out types.",
        "Modern approach to typing.",
      ],
      tabImages: ["image-1.0.svg", "image-1.1.svg", "image-1.2.svg"],
    },
  ];

  const createTabs = (tabImages) => {
    return tabImages.map((imagePath, i) => {
      const exampleNumber = i + 1;
      return {
        title: `Example ${exampleNumber}`,
        content: (
          <div className="p-4 rounded w-full">
            <img src={imagePath} alt={`Example ${exampleNumber}`} />
          </div>
        ),
      };
    });
  };

  if (Number(slide) >= totalSlides) {
    return <div>End</div>;
  }

  const slideIndex = Number(slide);
  const currentSlide = slides[slideIndex];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <main className="mb-8 p-6 rounded-lg">
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

        <Tabs items={createTabs(currentSlide.tabImages)} />
      </main>
    </div>
  );
}

export default SlideDemo;
