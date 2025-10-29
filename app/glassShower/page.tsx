import GlassAdvantages from "../components/GlassShower/GlassAdvantage";
import GlassBanner from "../components/GlassShower/GlassBanner";
import GlassBlankBanner from "../components/GlassShower/GlassBlankBanner";
import GlassCardCarousel from "../components/GlassShower/GlassCardCarousel";
import GlassContent from "../components/GlassShower/GlassContent";
import GlassEmergencyBanner from "../components/GlassShower/GlassEmergencyBanner";
import GlassFitting from "../components/GlassShower/GlassFitting";
import GlassLast from "../components/GlassShower/GlassLast";
import GlassNewsLetter from "../components/GlassShower/GlassNewLetter";
import GlassRight from "../components/GlassShower/GlassRight";
import GlassShower from "../components/GlassShower/GlassShower";
import InstallationQuestion from "../components/GlassShower/InstallationQuestion";
import ShowerWalls from "../components/GlassShower/ShowerWalls";

export default function page() {
  return (
    <>
      <GlassBanner />
      <ShowerWalls />
      <GlassShower />
      <GlassContent />
      <GlassAdvantages />
      <GlassRight />
      <div className="bg-[#f8f9ff]">
        <GlassBlankBanner />
        <InstallationQuestion />
        <GlassEmergencyBanner />
        <GlassFitting />
        <GlassLast />
        <GlassCardCarousel />
      </div>
      <GlassNewsLetter />
    </>
  );
}
