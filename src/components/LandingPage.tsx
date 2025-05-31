import React from 'react';
import './LandingPage.css';
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { PulsatingButton } from "@/components/magicui/pulsating-button";


const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div id="blob1" className="blob"></div>
      <div id="blob2" className="blob"></div>
      <div id="blob3" className="blob"></div>
      <div id="blob4" className="blob"></div>
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 gap-4">
         <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] cursor-pointer">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-sm font-medium">
              Introducing shine my resume
            </AnimatedGradientText>
          </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          AI-Powered<br /> Resume <span className="gradient-text">Enhancer</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
          Create professional, ATS-friendly resumes with <br />smart suggestions,
          tailored content, and export in multiple formats effortlessly!
        </p>
        <div className="flex gap-2">

          <div className="absolute inset-0 -z-10 animate-pulse blur-xl bg-radial-gradient from-white/30 to-transparent rounded-full"></div>
          <InteractiveHoverButton>Create your first ATS friendly resume</InteractiveHoverButton>
            <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
             Learn more
            </span>
          </ShimmerButton>
          
        </div>
      </main>
    </div>
  );
};

export default LandingPage;