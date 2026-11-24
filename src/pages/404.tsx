import Head from "next/head";
import NextLink from "next/link";
import { useEffect, useRef } from "react";
import { LOOK, TextureFilters } from "@/components/options";
import { Bridge } from "@/components/sketch";

/*
 * the page for an address that isn't one: the front page's own heading,
 * about you this time.
 */

const home = (label: string) => (
  <NextLink className="lnk" href="/">
    <span className="lnk-t">{label}</span>
  </NextLink>
);

function Lost() {
  return (
    <div className="v2-column">
      <header className="head">
        <h1>
          <span className="tx">Hey, you're </span>
          <span className="name">
            <span className="tx">lost.</span>
            <span className="name-box" data-size="404 × 404" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
          </span>
        </h1>
        <p className="where">
          <Bridge seed={43} />
          <span className="tx">Nowhere </span>
          <span className="coords">
            <span>← 0.0000 →</span>
            <span>→ 0.0000 ←</span>
          </span>
          <span className="tx">in particular</span>
        </p>
      </header>
      <div className="rest">
        <p className="tx">
          There's nothing at this address. Everything I have is back{" "}
          {home("on the front page")}.
        </p>
      </div>
    </div>
  );
}

export default function NotFound() {
  const ref = useRef<HTMLDivElement>(null);
  // each link's line says how long it is, as on the front page
  useEffect(() => {
    const measure = () => {
      for (const el of ref.current?.querySelectorAll<HTMLElement>(".lnk-t") ??
        []) {
        el.dataset.w = String(Math.round(el.getBoundingClientRect().width));
      }
    };
    measure();
    document.fonts.ready.then(measure);
  }, []);

  return (
    <div
      ref={ref}
      className="v2 lost"
      data-stage="settled"
      data-marks="guide"
      style={LOOK}
    >
      <Head>
        <title>404 — Nithin Aruswamy</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Lost />
      <TextureFilters />
    </div>
  );
}
