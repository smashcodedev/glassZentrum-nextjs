import React from "react";
import TwoColumnSection from "../Ui/TwoColumnSection";
import { CircleCheckBig } from "lucide-react";

export default function BrokenGlass() {
  return (
    <TwoColumnSection
      reverse={false}
      heading="Glass breakage - what are the most common causes?"
      paragraph={`
        An important part of glass repair is investigating the cause. How does glass break? To do this, we have to deal with "glass" as a material, because there are a wide variety of circumstances for a crack in the window pane, scratches in the glass door,  broken mirrors - in short: for all kinds of damage that we need to repair .`}
      imageSrc="/images/repair/brokenGlass.jpg"
      list={true}
      listItem={[
        "Glass repair due to external influences such as  thermal influences such as heat and cold, any stress  ",
        "Glass repair due to incorrect installation  or production errors",
        "Glass replacement due to blind spaces between the panes or upgrading of the glazing",
      ]}
      listIcon={<CircleCheckBig />}
      imageClassName="!-translate-y-16"
    />
  );
}
