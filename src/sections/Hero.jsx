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
      <div className="p-24 bg-zinc-800" style={openingStyleTop}>
   
      </div>
      <div className="w-full relative overflow-hidden">
        <img
          src={bulb}
          className="absolute right-0 md:left-0 top-0 w-1/5 animate-float"
          style={{
            animationDuration: "10s",
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }}
        />
        <img
          src={vr}
          className="absolute right-0 bottom-0 w-1/5 animate-float"
          style={{
            animationDuration: "8s",
            animationDelay: "2s",
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }}
        />

        <div className="mx-auto w-fit mt-16 z-10 relative">
          <h1 className="text-4xl lg:text-[100px] font-bold animate-bounce">
            The
          </h1>
          <h1 className="text-8xl lg:text-[200px] font-bold animate-pulse">
            Novate
          </h1>
          <div>
            <Button
              className="mt-8 animate-bounce"
              onClick={() => console.log("Button Clicked!")}
            >
              WHO ARE WE?
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
