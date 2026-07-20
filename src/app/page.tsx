"use client";

import { useState } from "react";
import ReactLenis, { useLenis } from "lenis/react";
import { useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";

import { HeroHeader } from "@/components/header";
import { ShaderBackground } from "@/components/shader-background";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { StickyCardStack } from "@/components/sticky-card-stack";
import {
  HeroCard,
  CheckerCard,
  ExperienceCard,
  StackCard,
  ContactCard,
} from "@/components/cards";

function ScrollCue() {
  const { scrollYProgress } = useScroll();
  const lenis = useLenis();
  const [mode, setMode] = useState<"down" | "up" | null>("down");
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setMode(v <= 0.05 ? "down" : v >= 0.9 ? "up" : null);
  });
  const go = (y: number) => {
    if (lenis) lenis.scrollTo(y, { duration: 0.9, lock: true });
    else window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <AnimatePresence mode="wait">
      {mode && (
        <ScrollIndicator
          key={mode}
          dir={mode}
          onClick={() => go(mode === "down" ? window.innerHeight : 0)}
        />
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <HeroHeader />
      <ScrollCue />
      <ReactLenis root options={{ autoRaf: false, smoothWheel: false }}>
        <StickyCardStack>
          <HeroCard />
          <CheckerCard />
          <ExperienceCard />
          <StackCard />
          <ContactCard />
        </StickyCardStack>
      </ReactLenis>
    </>
  );
}
