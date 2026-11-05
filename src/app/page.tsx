import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import {
  Stats,
  Problems,
  WhatItIs,
  HowItWorks,
  NotDoing,
  Audiences,
  Economics,
  NextSteps,
} from "@/components/site/sections";
import { CtaBand, Footer } from "@/components/site/cta";
import { RevealScript } from "@/components/site/reveal";
import { Metrics } from "@/components/site/metrics";

export default function Home() {
  return (
    <div className="nfx" id="top">
      <a className="skip-link" href="#main">
        Перейти к содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Problems />
        <WhatItIs />
        <HowItWorks />
        <NotDoing />
        <Audiences />
        <Economics />
        <NextSteps />
        <CtaBand />
      </main>
      <Footer />
      <RevealScript />
      <Metrics />
      <noscript>
        <style>{`.nfx .reveal { opacity: 1; translate: none; }`}</style>
      </noscript>
    </div>
  );
}
