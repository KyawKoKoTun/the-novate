import React from "react";
import Button from "../components/Button"; // Ensure the path is correct
import bulb from "../assets/bulb.png";
import vr from "../assets/vr.png";

export default function Hero() {

    const openingStyleTop = {
        animation: "expand 2s ease forwards",
        animationName: "expandTop", // Note: This won't work as expected without defining keyframes in CSS
      };
    

  return (
    <>
      <div id='home' ></div>
      <div className="p-16 sticky z-40 top-0 bg-zinc-800" style={openingStyleTop}>

      </div>
      <div className="w-full px-[20px] sm:px-[80px] md:px-[140px] lg:px-[200px] relative overflow-hidden">
        <div className="mt-16 z-10 relative">
          <h1 className="text-4xl lg:text-[100px] font-bold animate-bounce">
            The
          </h1>
          <h1 className="text-8xl text-red-500 lg:text-[200px] font-bold animate-pulse">
            Novate
          </h1>
          <div>
            <a href='#about'>
            <Button
              className="mt-8"
              onClick={() => console.log("Button Clicked!")}
            >
              WHO ARE WE?
            </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
