// src/app/_components/mdx.tsx
import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';

function Code({
  children,
  className,
  ...props
}: {
  children: string;
  className?: string;
}) {
  // Extract language from className (e.g., "language-ts" -> "ts")
  const language = className ? className.replace(/language-/, '') : '';

  // Apply highlighting with sugar-high
  const codeHTML = highlight(children);

  return (
    <code
      className={`${className} syntax-highlighted`}
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  );
}

function Pre({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <pre className={className} {...props}>
      {children}
    </pre>
  );
}

const components = {
  code: Code,
  pre: Pre,
};

interface CustomMDXProps {
  components?: Record<string, React.ComponentType<any>>;
  [key: string]: any;
}

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
