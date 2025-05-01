// src/components/mdx.tsx
// import 'server-only';
'use client';

import clsx from 'clsx';
// import {cx} from 'cva.config';
import {ComponentPropsWithoutRef} from "react";
import {highlight} from "sugar-high";

type MdxComponentProps = {
    className: string;
};

const components = {

    pre: ({className, ...props}: MdxComponentProps) => (
        <pre
            // !bg-transparent
            className={clsx(
                'px-0',
                'group relative m-0 overflow-x-auto rounded-md py-4',
                // '!bg-transparent',
                className,
            )}
            {...props}
        >
       {/*// @ts-ignore */}
            <CodeCopyButton text={props.__rawstring__}/>
            {/*// @ts-ignore */}
            {props.children}
    </pre>
    ),
    // code: ({className, ...props}: any) => (
    //     <code
    //         className={clsx(
    //             // 'relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm',
    //             'font-mono text-sm',
    //             className,
    //         )}
    //         {...props}
    //     />
    // ),
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
        const codeHTML = highlight(children as string);
        return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
    },
    // CodeBlockTitle,
};

declare global {
    type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
    return components;
}