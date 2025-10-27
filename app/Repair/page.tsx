import BrandRepairCarousel from "../components/repair/BrandCarousel";
import BrokenGlass from "../components/repair/BrokenGlass";
import BrokenWindowPans from "../components/repair/BrokenWindowPans";
import EmergencyBanner from "../components/repair/EmergencyBanner";
import GlassRepair from "../components/repair/GlassRepair";

import LongText from "../components/repair/LongText";
import OurExperts from "../components/repair/OurExperts";
import PreventGlass from "../components/repair/PreventGlass";
import ProtectGlass from "../components/repair/ProtectGlass";
import RepairBanner from "../components/repair/RepairAbout";
import RepairVideo from "../components/repair/RepairVideo";

export default function Repair() {
  return (
    <>
      <RepairBanner />
      <OurExperts />
      <BrokenGlass />
      <LongText />
      <ProtectGlass />
      <PreventGlass />
      <EmergencyBanner />
      <GlassRepair />
      <BrandRepairCarousel />
      <BrokenWindowPans />
      <RepairVideo />
    </>
  );
}
