"use client";

import React, { useState } from "react";
import { slidesData } from "@/app/_data";

function Tabs({ items }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {items.map((item, index) => (
          <button
            key={index}
            className={`px-6 py-3 cursor-pointer font-mono text-base ${
              activeTab === index
                ? "border-b-2 border-[#0060CC] font-medium text-[#0060CC]"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <div className="p-4">{items[activeTab]?.content}</div>
      </div>
    </div>
  );
}

function SlideDemo({ slide }: { slide: string }) {
  const totalSlides = slidesData.length;

  const createTabs = (tabImages) => {
    return tabImages.map((imagePath, i) => {
      const exampleNumber = i + 1;
      return {
        title: `Example ${exampleNumber}`,
        content: (
          <div className="p-4 rounded-md w-full flex justify-center">
            <img
              src={imagePath}
              alt={`Example ${exampleNumber}`}
              className="rounded-md shadow-sm max-w-lg"
            />
          </div>
        ),
      };
    });
  };

  if (Number(slide) >= totalSlides) {
    return <div>End</div>;
  }

  const slideIndex = Number(slide);
  const currentSlide = slidesData[slideIndex];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <main className="p-6 rounded-lg shadow-sm">
        <h1 className="font-mono text-4xl text-start">{currentSlide.title}</h1>

        <ul className="list-disc pl-8 text-lg font-mono my-10">
          {currentSlide.bullets.map((bullet, index) => (
            <li key={index} className="mb-3 tracking-tight">
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
