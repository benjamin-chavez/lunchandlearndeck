// src/app/mdx-page/page.tsx
'use client';
import '@/app/globals.css';
import '../syntax-highlight.css'; // Import the syntax highlighting CSS if in separate file

import Welcome from '@/app/_components/welcome.mdx';

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8 prose prose-lg">
      <Welcome />
    </div>
  );
}
