import BigCarousel from "../components/Repair/BigCarousel";
import BrandRepairCarousel from "../components/Repair/BrandCarousel";
import BrokenGlass from "../components/Repair/BrokenGlass";
import BrokenWindowPans from "../components/Repair/BrokenWindowPans";
import CardsSlider from "../components/Repair/CardsSlider";
import DisposeGlass from "../components/Repair/DisposeGlass";
import EmergencyBanner from "../components/Repair/EmergencyBanner";
import EmergencyBannerGreen from "../components/Repair/EmergencyBannerGreen";
import EmergencyServices from "../components/Repair/EmergencyServices";
import GlassRepair from "../components/Repair/GlassRepair";

import LongText from "../components/Repair/LongText";
import OurExperts from "../components/Repair/OurExperts";
import PreventGlass from "../components/Repair/PreventGlass";
import ProtectGlass from "../components/Repair/ProtectGlass";
import RepairBanner from "../components/Repair/RepairAbout";
import RepairVideo from "../components/Repair/RepairVideo";

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
      <DisposeGlass />
      <EmergencyServices />
      <EmergencyBannerGreen />
      <BigCarousel />
      <CardsSlider />
    </>
  );
}
