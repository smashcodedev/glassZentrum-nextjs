import BrokenGlass from "../components/Repair/BrokenGlass";

import LongText from "../components/Repair/LongText";
import OurExperts from "../components/Repair/OurExperts";
import PreventGlass from "../components/Repair/PreventGlass";
import ProtectGlass from "../components/Repair/ProtectGlass";
import RepairBanner from "../components/Repair/RepairAbout";

export default function Repair() {
  return (
    <>
      <RepairBanner />
      <OurExperts />
      <BrokenGlass />
      <LongText />
      <ProtectGlass />
      <PreventGlass />
    </>
  );
}
