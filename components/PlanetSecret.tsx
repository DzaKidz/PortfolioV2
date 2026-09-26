"use client";

import { useEffect, useRef, useState } from "react";
import Parallax from "./Parallax";
import Boop from "./Boop";
import SlidePuzzle from "./SlidePuzzle";
import { Planet } from "./Doodles";
import styles from "@/app/home.module.css";

const TAP_WINDOW_MS = 1200;
const TAPS_TO_OPEN = 3;

/**
 * Planet di langit sekaligus pintu rahasia: diklik 3 kali dalam
 * 1,2 detik membuka mini-game tersembunyi "Susun Ulang".
 */
export default function PlanetSecret() {
  const [open, setOpen] = useState(false);
  const [round, setRound] = useState(0);
  const taps = useRef(0);
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    []
  );

  const onTap = () => {
    taps.current += 1;
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      taps.current = 0;
    }, TAP_WINDOW_MS);
    if (taps.current >= TAPS_TO_OPEN) {
      taps.current = 0;
      if (timer.current) window.clearTimeout(timer.current);
      setRound((r) => r + 1);
      setOpen(true);
    }
  };

  return (
    <>
      <Parallax speed={-0.04} className={styles.skyPlanet}>
        <Boop
          style={{ width: "100%" }}
          label="Planet — klik untuk animasi"
          onClick={onTap}
        >
          <span className={`${styles.skyFloat} ${styles.sf4}`}>
            <Planet style={{ width: "100%", height: "auto" }} />
          </span>
        </Boop>
      </Parallax>
      <SlidePuzzle
        key={round}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
