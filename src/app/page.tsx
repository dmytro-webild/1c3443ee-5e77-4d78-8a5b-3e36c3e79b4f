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
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Features", id: "features" },
        { name: "Metrics", id: "metrics" },
        { name: "Pricing", id: "pricing" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="SaleHoo"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Build Your Wholesale Empire with SaleHoo"
      description="Access over 8,000 trusted suppliers, 2.5 million products, and the industry's best product research tools. Start sourcing profitably today."
      buttons={[{ text: "Get Started", href: "#pricing" }]}
      imageSrc="http://img.b2bpic.net/free-photo/identity-copyright-branding-product-marketing-concept_53876-15829.jpg"
      showDimOverlay={true}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Sourcing Tools Built for Success"
      description="Everything you need to find profitable items and reliable suppliers in one place."
      accordionItems={[
        { id: "1", title: "Verified Supplier Directory", content: "Gain access to vetted wholesalers and manufacturers globally." },
        { id: "2", title: "Product Research Lab", content: "Spot high-margin products with accurate sales data." },
        { id: "3", title: "Marketplace Integration", content: "Connect effortlessly with Amazon, eBay, and Shopify." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/female-web-designer-office-with-laptop_23-2149749889.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      gridVariant="uniform-all-items-equal"
      textboxLayout="default"
      metrics={[
        { id: "m1", value: "8000+", description: "Verified Suppliers" },
        { id: "m2", value: "2.5M+", description: "Product Listings" },
        { id: "m3", value: "150k+", description: "Active Members" },
      ]}
      title="Proven Performance"
      description="Results that drive real growth for e-commerce entrepreneurs."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      plans={[
        { id: "basic", tag: "Essential", price: "$27", period: "/mo", description: "Access to verified supplier directory and basic research tools.", button: { text: "Get Started" }, featuresTitle: "Includes:", features: ["Supplier Directory", "Email Support", "Community Access"] },
        { id: "pro", tag: "Scale", price: "$97", period: "/mo", description: "Full access to advanced product research and automated integrations.", button: { text: "Get Started" }, featuresTitle: "Includes:", features: ["Product Research Lab", "Marketplace Automation", "Priority Support"] },
      ]}
      title="Flexible Sourcing Plans"
      description="Choose the right plan to scale your business efficiently."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      names={["Shopify", "Amazon", "eBay", "Walmart", "Etsy", "Target", "Wayfair"]}
      title="Trusted by Industry Leaders"
      description="Powering brands across the global retail landscape."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      testimonial="SaleHoo turned my side project into a full-time business. The verified suppliers saved me countless hours of research."
      rating={5}
      author="Sarah Miller"
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
      avatars={[]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      faqs={[
        { id: "1", title: "Are suppliers verified?", content: "Yes, we manually vet all suppliers." },
        { id: "2", title: "Can I integrate with Amazon?", content: "Yes, our tools integrate smoothly with leading marketplaces." },
        { id: "3", title: "How does pricing work?", content: "We offer monthly and annual billing options." },
      ]}
      title="Common Questions"
      description="Find quick answers about getting started with SaleHoo."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      title="Need Guidance?"
      description="Our team of sourcing experts is here to help you scale. Drop us a line."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name" },
        { name: "email", type: "email", placeholder: "Email Address" },
      ]}
      textarea={{ name: "message", placeholder: "Tell us about your business goals" }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="SaleHoo"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
