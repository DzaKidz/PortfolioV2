"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/lib/i18n";

const PIC = "/images/avatar.jpg";
const BEST_KEY = "puzzle-best";
const SOLVED = [1, 2, 3, 4, 5, 6, 7, 8, 0] as const;
const SHUFFLE_STEPS = 160;

type Board = number[];

const isSolved = (b: Board) => b.every((v, i) => v === SOLVED[i]);

const neighbors = (i: number) => {
  const r = Math.floor(i / 3);
  const c = i % 3;
  const out: number[] = [];
  if (r > 0) out.push(i - 3);
  if (r < 2) out.push(i + 3);
  if (c > 0) out.push(i - 1);
  if (c < 2) out.push(i + 1);
  return out;
};

/** Acak dari posisi selesai lewat langkah legal → dijamin bisa diselesaikan. */
function shuffle(): Board {
  const b: Board = SOLVED.slice();
  let blank = 8;
  let prev = -1;
  for (let i = 0; i < SHUFFLE_STEPS; i += 1) {
    const opts = neighbors(blank).filter((n) => n !== prev);
    const pick = opts[Math.floor(Math.random() * opts.length)];
    [b[blank], b[pick]] = [b[pick], b[blank]];
    prev = blank;
    blank = pick;
  }
  return isSolved(b) ? shuffle() : b;
}

function readBest(): number {
  if (typeof window === "undefined") return 0;
  try {
    return Number(window.localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    return 0;
  }
}

function saveBest(value: number) {
  try {
    window.localStorage.setItem(BEST_KEY, String(value));
  } catch {
    /* abaikan */
  }
}

const fmt = (ms: number) => {
  const s = Math.floor(ms / 1000);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};

/**
 * Easter egg tersembunyi: klik planet di langit 3 kali dalam 1,2 detik.
 * Teka-teki geser 3×3 — susun potongan foto sampai kembali utuh.
 */
export default function SlidePuzzle({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "playing" | "solved">("idle");
  const [board, setBoard] = useState<Board>(() => SOLVED.slice());
  const [moves, setMoves] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [best, setBest] = useState(readBest);
  const startRef = useRef(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const start = useCallback(() => {
    startRef.current = Date.now();
    setBoard(shuffle());
    setMoves(0);
    setElapsed(0);
    setStatus("playing");
  }, []);

  useEffect(() => {
    if (!open || status !== "playing") return;
    const tick = window.setInterval(() => {
      setElapsed(Date.now() - startRef.current);
    }, 250);
    return () => window.clearInterval(tick);
  }, [open, status]);

  if (!open) return null;

  const slide = (i: number) => {
    if (status !== "playing") return;
    const blank = board.indexOf(0);
    if (!neighbors(blank).includes(i)) return;
    const next = board.slice();
    [next[blank], next[i]] = [next[i], next[blank]];
    setBoard(next);
    setMoves((m) => m + 1);
    if (isSolved(next)) {
      const total = moves + 1;
      setBest((b) => {
        const final = b === 0 ? total : Math.min(b, total);
        saveBest(final);
        return final;
      });
      setStatus("solved");
    }
  };

  const solved = status === "solved";

  return createPortal(
    <div
      className="game-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.game.title}
    >
      <div className="game-panel" onClick={(e) => e.stopPropagation()}>
        <div className="game-head">
          <p className="game-title">{t.game.title}</p>
          <button
            type="button"
            className="game-close"
            onClick={onClose}
            aria-label={t.game.close}
          >
            ✕
          </button>
        </div>

        <div className="game-hud">
          <span>
            {t.game.moves} <b>{moves}</b>
          </span>
          <span>
            {t.game.best} <b>{best || "—"}</b>
          </span>
          <span>
            {t.game.time} <b>{fmt(elapsed)}</b>
          </span>
        </div>

        <div className="game-body">
          <div
            className={`puzzle-board${solved ? " puzzle-board--solved" : ""}`}
          >
            {board.map((v, i) =>
              v === 0 ? (
                <span key="blank" className="puzzle-blank" aria-hidden="true" />
              ) : (
                <button
                  key={v}
                  type="button"
                  className="puzzle-tile"
                  style={{
                    backgroundImage: `url(${PIC})`,
                    backgroundPosition: `${((v - 1) % 3) * 50}% ${
                      Math.floor((v - 1) / 3) * 50
                    }%`,
                  }}
                  onClick={() => slide(i)}
                  aria-label={`${t.game.title} ${v}`}
                >
                  <span className="puzzle-num">{v}</span>
                </button>
              )
            )}
          </div>

          {status !== "playing" && (
            <div className="game-msg">
              <p className="game-msgTitle">
                {solved ? t.game.solved : t.game.title}
              </p>
              <p className="game-msgText">
                {solved
                  ? `${t.game.moves} ${moves} · ${t.game.time} ${fmt(elapsed)}`
                  : t.game.howto}
              </p>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={start}
              >
                {solved ? t.game.again : t.game.start}
              </button>
            </div>
          )}
        </div>

        <div className="game-foot">{t.game.hint}</div>
      </div>
    </div>,
    document.body
  );
}
