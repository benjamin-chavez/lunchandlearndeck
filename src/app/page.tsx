"use client";
import React from "react";
import { PythonLogo } from "@/app/_components/python-logo";
import { Navigation } from "@/app/_components/navigation";
import Image from "next/image";

export default function Home() {
  const slideInt = -1;

  return (
    <>
      <div className="p-8 max-w-4xl mx-auto">
        <main className="p-6 rounded-lg shadow-sm">
          <div className="flex flex-col w-full items-center">
            <div className="font-mono text-6xl font-bold flex-nowrap flex justify-center items-center mb-2">
              <span className="tracking-normal">
                Mario <span className="-ml-6">on</span>{" "}
              </span>
              <span className="text-blue-600 tracking-normal">:</span>
              <span className="tracking-tighter">my</span>
              <span className="text-blue-600 tracking-normal">[</span>
              <span className="tracking-tighter">py</span>
              <span className="text-blue-600 tracking-normal">]</span>
              <div className="size-20 ml-2">
                <PythonLogo />
              </div>
            </div>
            <h1 className="font-mono text-4xl flex justify-center text-white/80">
              Static Type Checking
            </h1>
          </div>

          <div className="w-full flex items-center justify-center my-10">
            <Image
              src="/mario-on-mypy.jpg"
              alt="Mario on mypy illustration"
              width={500}
              height={500}
              className="rounded-md shadow-sm"
            />
          </div>
        </main>
      </div>
      <Navigation slide={slideInt} />
    </>
  );
}
