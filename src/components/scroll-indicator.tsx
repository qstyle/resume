"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Pointer } from "lucide-react";

/** Desktop: mouse outline with a scrolling dot. */
function MouseGlyph({ up }: { up?: boolean }) {
  return (
    <div className="relative flex h-9 w-[22px] justify-center rounded-full border-2 border-current">
      <motion.span
        className="mt-2 block h-2 w-[3px] rounded-full bg-current"
        animate={{ y: up ? [0, -5, 0] : [0, 5, 0], opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/** Touch: a finger making a swipe gesture. */
function SwipeGlyph({ up }: { up?: boolean }) {
  return (
    <motion.div
      animate={{ y: up ? [0, -7, 0] : [0, 7, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <Pointer className="size-6" />
    </motion.div>
  );
}

export function ScrollIndicator({
  dir,
  onClick,
}: {
  dir: "down" | "up";
  onClick: () => void;
}) {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const narrow = window.matchMedia("(max-width: 767px)");
    const check = () => setTouch(coarse.matches || narrow.matches);
    check();
    coarse.addEventListener?.("change", check);
    narrow.addEventListener?.("change", check);
    return () => {
      coarse.removeEventListener?.("change", check);
      narrow.removeEventListener?.("change", check);
    };
  }, []);

  const up = dir === "up";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={up ? "Наверх" : "Листать вниз"}
      initial={{ opacity: 0, y: up ? -6 : 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-x-0 bottom-5 z-10 mx-auto flex w-fit cursor-pointer flex-col items-center gap-2 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,0,0,0.5),transparent_72%)] px-10 py-4 text-white [filter:drop-shadow(0_2px_6px_rgba(0,0,0,0.7))] hover:text-white"
    >
      {touch ? <SwipeGlyph up={up} /> : <MouseGlyph up={up} />}
      <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
        {up ? "Вверх" : "Вниз"}
      </span>
    </motion.button>
  );
}
