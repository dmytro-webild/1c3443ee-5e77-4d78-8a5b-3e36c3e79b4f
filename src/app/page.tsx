"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="large"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Metrics",
          id: "metrics",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="SaleHoo"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Build Your Wholesale Empire with SaleHoo"
      description="Access over 8,000 trusted suppliers, 2.5 million products, and the industry's best product research tools. Start sourcing profitably today."
      buttons={[
        {
          text: "Get Started",
          href: "#pricing",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/identity-copyright-branding-product-marketing-concept_53876-15829.jpg"
      showDimOverlay={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/businessman-holding-world-map-connecting-global-communication-network-generated-by-ai_24911-72427.jpg",
          alt: "Global team",
        },
        {
          src: "http://img.b2bpic.net/free-photo/bucharest-romania-july-30th-2024-director-watches-olympics-swimming-trial_482257-123070.jpg",
          alt: "Logistics director",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-associates-collaborating-conference-table-boardroom_482257-122868.jpg",
          alt: "Strategy meeting",
        },
        {
          src: "http://img.b2bpic.net/free-photo/military-it-professional-gathers-intelligence-from-world-map-projection_482257-89861.jpg",
          alt: "Intelligence analyst",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5355.jpg",
          alt: "Startup founder",
        },
      ]}
      avatarText="Join 150k+ successful sellers"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Sourcing Tools Built for Success"
      description="Everything you need to find profitable items and reliable suppliers in one place."
      accordionItems={[
        {
          id: "1",
          title: "Verified Supplier Directory",
          content: "Gain access to vetted wholesalers and manufacturers globally, ensuring quality and reliability.",
        },
        {
          id: "2",
          title: "Product Research Lab",
          content: "Spot high-margin products with accurate sales data and demand forecasting tools.",
        },
        {
          id: "3",
          title: "Marketplace Integration",
          content: "Connect effortlessly with Amazon, eBay, and Shopify to automate your inventory management.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/female-web-designer-office-with-laptop_23-2149749889.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "8000+",
          description: "Verified Suppliers",
        },
        {
          id: "m2",
          value: "2.5M+",
          description: "Product Listings",
        },
        {
          id: "m3",
          value: "150k+",
          description: "Active Members",
        },
      ]}
      title="Proven Performance"
      description="Results that drive real growth for e-commerce entrepreneurs."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          tag: "Essential",
          price: "$27",
          period: "/mo",
          description: "Access to verified supplier directory and basic research tools.",
          button: {
            text: "Get Started",
          },
          featuresTitle: "Includes:",
          features: [
            "Supplier Directory",
            "Email Support",
            "Community Access",
          ],
        },
        {
          id: "pro",
          tag: "Scale",
          price: "$97",
          period: "/mo",
          description: "Full access to advanced product research and automated integrations.",
          button: {
            text: "Get Started",
          },
          featuresTitle: "Includes:",
          features: [
            "Product Research Lab",
            "Marketplace Automation",
            "Priority Support",
          ],
        },
      ]}
      title="Flexible Sourcing Plans"
      description="Choose the right plan to scale your business efficiently."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Shopify",
        "Amazon",
        "eBay",
        "Walmart",
        "Etsy",
        "Target",
        "Wayfair",
      ]}
      title="Trusted by Industry Leaders"
      description="Powering brands across the global retail landscape."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="SaleHoo turned my side project into a full-time business. The verified suppliers saved me countless hours of research."
      rating={5}
      author="Sarah Miller"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-businessman-sitting-sofa-waiting-area_107420-95816.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-grey-background_613910-11739.jpg",
          alt: "Mark",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-confident-young-man-with-his-crossed-arms-looking-camera_23-2148130362.jpg",
          alt: "Elena",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-lovely-woman-fashion-glasses-home_329181-4275.jpg",
          alt: "David",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smart-pensive-redhead-hipster-with-full-beard-glasses-dressed-casual-clothes-poses-with-hand-chin-studio-isolated-dark-background_613910-20091.jpg",
          alt: "Karen",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Are suppliers verified?",
          content: "Yes, we manually vet all suppliers to ensure you work with legitimate wholesalers.",
        },
        {
          id: "2",
          title: "Can I integrate with Amazon?",
          content: "Absolutely, SaleHoo tools integrate smoothly with leading marketplaces like Amazon and eBay.",
        },
        {
          id: "3",
          title: "How does pricing work?",
          content: "We offer monthly and annual billing options tailored to the size of your operation.",
        },
      ]}
      title="Common Questions"
      description="Find quick answers about getting started with SaleHoo."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/no-minute-without-my-laptop-handsome-young-man-working-laptop-while-enjoying-coffee-cafe_639032-2899.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Need Guidance?"
      description="Our team of sourcing experts is here to help you scale. Drop us a line."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your business goals",
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-aside-smiling-confident-with-arms-crossed-chest_141793-55366.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="SaleHoo"
      copyrightText="© 2025 SaleHoo. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
