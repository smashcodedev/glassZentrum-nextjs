"use client";

import BigSlider from "../components/Mirror/BigSlider";
import CardsSlider from "../components/Mirror/CardsSlider";
import EnlargeGlass from "../components/Mirror/EnlargeGlass";
import GlassMirror from "../components/Mirror/GlassMirror";
import MirrorBanner from "../components/Mirror/MirrorBanner";

export default function page() {
  return (
    <>
      <MirrorBanner />
      <EnlargeGlass />
      <GlassMirror />
      <BigSlider />
      <CardsSlider />
    </>
  );
}
