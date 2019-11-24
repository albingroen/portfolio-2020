import * as React from "react";

interface ITextBlockProps {
  number?: string;
  heading: string;
  lede: string;
  variant?: "left" | "right" | "center";
  parseHTML?: boolean;
  extra?: React.ReactNode;
}

export default function TextBlock({
  number,
  heading,
  lede,
  variant = "left",
  extra
}: ITextBlockProps) {
  return (
    <div className="flex justify-center py-32 px-8 flex-col bg-gray-900 pt-0">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl text-white text-${variant}`}>
          {number && <span className="font-mono text-2xl">{number} </span>}
          {heading}
        </h1>
        <p
          className={`text-xl mt-6 text-gray-600 font-light text-${variant}`}
          dangerouslySetInnerHTML={{ __html: lede }}
        />
        {extra}
      </div>
    </div>
  );
}
