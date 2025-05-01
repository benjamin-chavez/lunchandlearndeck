// src/app/mdx-components.tsx
'use client';

import { useEffect, useState } from 'react';
import type { MDXComponents } from 'mdx/types';
import { getHighlighter, Highlighter } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;

// Initialize the highlighter with a single instance
function getShikiHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = getHighlighter({
      theme: 'github-dark',
      langs: [
        'javascript',
        'typescript',
        'jsx',
        'tsx',
        'html',
        'css',
        'json',
        'markdown',
      ],
    });
  }
  return highlighterPromise;
}

function Code({
  children,
  className,
  ...props
}: {
  children: string;
  className?: string;
}) {
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Extract the language from className (language-xxx)
  const language = className ? className.replace(/language-/, '') : 'text';

  useEffect(() => {
    async function highlight() {
      try {
        const highlighter = await getShikiHighlighter();
        const code = children.trim();

        // Highlight the code with the extracted language
        const html = highlighter.codeToHtml(code, { lang: language });
        setHighlightedCode(html);
      } catch (error) {
        console.error('Error highlighting code:', error);
        // Fallback to non-highlighted code
        setHighlightedCode(`<pre><code>${children}</code></pre>`);
      } finally {
        setIsLoading(false);
      }
    }

    highlight();
  }, [children, language]);

  if (isLoading) {
    return <code className={className}>{children}</code>;
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
      className="shiki-wrapper"
    />
  );
}

// Component for pre tags
function Pre({ children, ...props }: { children: React.ReactNode }) {
  return <pre {...props}>{children}</pre>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code: Code,
    pre: Pre,
  };
}
