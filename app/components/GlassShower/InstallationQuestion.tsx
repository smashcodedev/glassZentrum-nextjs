import React from "react";
import BigImageComponent from "../Ui/BigImage/BigImageComponent";

export default function InstallationQuestion() {
  return (
    <BigImageComponent
      imageSrc="/images/glassShower/install.jpg"
      paragraphs={[
        "To answer this question, two factors should be considered. The space available in the bathroom and of course your personal preference for the design. Corner showers and round showers are the most commonly installed types of showers. The standard size is 90cm x 90cm. Walk-in showers are considered more modern and have their own visual appeal and also allow more brightness into the shower cubicle. Here the shower enclosure is designed in such a way that shower doors are no longer required. In addition, the access is at ground level and without a shower tray. Walk-in showers are often very large, which is why they are also called large-capacity showers. The more open design means the air circulates better in them and the risk of mold spores forming is minimized. Frameless showers also look more elegant than partially framed or fully framed shower enclosures. Basically, however, it can be said that the construction situation in every bathroom is individual in nature. For small bathrooms, corner showers and round showers are most suitable because they save more space. For very small niches, a niche shower of the same name is an option. Ideally, in the case of a new building, the individual desired design of the shower has been taken into account, which then saves costs because there are no modifications required. A complete shower is suitable for quick renovations. This has four side walls and does not have to be installed in a specific corner of the room - is therefore considered the most flexible solution. We not only help you with the equipment, but we also provide you with advice when deciding on the glass shower in question, so that initial mistakes can be avoided. With the Glass Center North we offer you a professional full service, from measurements to installation . Contact us by phone for your personal installation solution.",
      ]}
      // sectionClass="!bg-white !text-[16px]"
      // paragraphClass="!text-[#585C67]"
      imageHeight={500} // 👈 makes it shorter (was 700 by default)
      isBanner
      bannerBgColor="bg-white" // or "bg-[#F0F5FF]" or a Tailwind class
      bannerTextColor="text-[#585C67]"
      bannerPaddingClass="p-8"
      sectionClass="!py-8"
      paragraphClass="!text-[#585C67]"
      paragraphAlign="center"
      heading="A question of installation situation and taste: shower cubicle complete, frameless, round or square?"
    />
  );
}
