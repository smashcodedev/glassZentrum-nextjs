"use client";

import AboutBanner from "../components/About/AboutBanner";
import AboutVideo from "../components/About/AboutVideo";
import InShort from "../components/About/InShort";
import NewsLetter from "../components/About/NewsLetter";
import WeWantBanner from "../components/About/WeWantBanner";
import WhatDriveUs from "../components/About/WhatDriveUs";
import WhatWeDo from "../components/About/WhatWeDo";
import WhoWeAre from "../components/About/WhoWeAre";

export default function About() {
  return (
    <>
      <AboutBanner />
      <WhatWeDo />
      <WhoWeAre />
      <AboutVideo />
      <WhatDriveUs />

      <section className="bg-[#f8f9ff]">
        <WeWantBanner />
        <InShort />
      </section>

      <NewsLetter />
    </>
  );
}
