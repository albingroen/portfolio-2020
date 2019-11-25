import * as React from "react";
import Button from "../../../components/button";
import Profile from "../../../images/profile_square.jpeg";
import Social from "../../../components/social";

export default function Hero() {
  return (
    <div
      className="px-8 bg-gray-900 flex items-center justify-center flex-col mb-20"
      style={{
        height: /iPhone/.test(window.navigator.userAgent)
          ? "calc(100vh - 110px)"
          : "100vh"
      }}
    >
      <div className="opacity-0 sm:opacity-100">
        <Social />
      </div>
      <img src={Profile} alt="Profile" className="w-16 h-16 mb-6 rounded" />
      <h1 className="text-white text-center text-6xl">Albin Groen</h1>
      <p className="text-gray-600 text-xl">Pixel perfect web development</p>
      <a href="mailto:albin.groen@gmail.com?subject=Hello%20Albin!">
        <Button className="mt-8">Get in contact</Button>
      </a>
      <div className="absolute left-auto bottom-0 opacity-0 md:opacity-100">
        <div className="border-gray-700 border-dashed border-r-2 h-32 mt-10"></div>
        <div className="absolute top-0 left-0 w-1 h-32">
          <div className="border-white h-full w-full border-r-2 h-12 mt-10 animated-border"></div>
        </div>
      </div>
    </div>
  );
}
