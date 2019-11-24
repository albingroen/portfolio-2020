import * as React from "react";
import Button from "../../../components/button";

export default function Footer() {
  return (
    <div className="px-8 bg-gray-900 flex items-center justify-center flex-col">
      <p className="text-gray-600 text-xl">Pixel perfect web development</p>
      <a href="mailto:albin.groen@gmail.com?subject=Hello%20Albin!">
        <Button className="mt-8">Get in contact</Button>
      </a>
      <div className="relative">
        <div className="border-gray-700 border-dashed border-r-2 h-32 mt-10"></div>
        <div className="absolute top-0 left-0 w-1 h-32">
          <div className="border-white h-full w-full border-r-2 h-12 mt-10 animated-border-reverse"></div>
        </div>
      </div>
    </div>
  );
}
