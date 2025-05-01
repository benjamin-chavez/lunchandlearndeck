"use client";
import React from "react";
import { PythonLogo } from "@/app/_components/python-logo";
import { Navigation } from "@/app/_components/navigation";
import Image from "next/image";

export default function Home() {
  const slideInt = -1;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <main className="mb-8 p-6 rounded-lg">
        <h1 className="font-mono text-5xl text-start mb-6">
          Static Type Checking
          <span className="text-7xl flex">
            {" "}
            Mario on <span className="text-[#0060CC]">:</span>my
            <span className="text-[#0060CC]">[</span>py
            <span className="text-[#0060CC]">]</span>{" "}
            <div className="size-24 -mt-2">
              <PythonLogo />
            </div>
          </span>
        </h1>

        <div className="w-full flex items-center justify-center my-10">
          <Image
            src="/mario-on-mypy.jpg"
            alt="Mario on mypy illustration"
            width={500}
            height={500}
          />
        </div>

        <Navigation slide={slideInt} isRoot />
      </main>
    </div>
  );
}
