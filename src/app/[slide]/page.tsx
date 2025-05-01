import "server-only";

import React from "react";

import { Navigation } from "@/app/_components/navigation";
import { redirect } from "next/navigation";
import SlideDemo from "@/app/_components/slide-demo";

async function Page({ params }: { params: Promise<{ slide: string }> }) {
  const { slide } = await params;
  const slideInt = parseInt(slide, 10);

  if (slideInt <= -1) {
    redirect("/");
  }

  return (
    <>
      <SlideDemo slide={slide} />
      <Navigation slide={slideInt} />
    </>
  );
}

export default Page;
