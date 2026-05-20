"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="large"
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[]}
      brandName="SaleHoo"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="SaleHoo"
      description="SaleHoo helps e-commerce entrepreneurs build their businesses by connecting them with a massive, vetted directory of trusted wholesale suppliers and providing the professional tools needed to conduct market research and source products profitably."
      buttons={[{ text: "Start Now" }]}
      showDimOverlay={true}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}