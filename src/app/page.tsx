"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Activity, LineChart, ShieldCheck, Target, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Training",
          id: "#features",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "Science",
          id: "#metrics",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
      ]}
      brandName="Pitch Lab"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "plain",
      }}
      title="Unlock Your Ultimate Potential"
      description="Lab-engineered accessories built for players who demand more from every session. Precision training gear for those who treat the pitch like a workspace."
      kpis={[
        {
          value: "12+",
          label: "Training Drills",
        },
        {
          value: "5k+",
          label: "Players Upgraded",
        },
        {
          value: "99%",
          label: "Performance Gains",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Start Shopping",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-man-playing-soccer_23-2150405401.jpg"
      imageAlt="Soccer training precision"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/amateur-football-concept-with-goalkeeper_23-2147833444.jpg",
          alt: "Pro athlete 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sportive-man-with-headphones-looking-away_23-2148303396.jpg",
          alt: "Pro athlete 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-male-hands-tying-up-sport-shoes_1262-4792.jpg",
          alt: "Pro athlete 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/football-player-executing-free-kick_23-2147644513.jpg",
          alt: "Pro athlete 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-man-playing-soccer_23-2150405401.jpg",
          alt: "Pro athlete 5",
        },
      ]}
      avatarText="Used by 5,000+ elite players"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Precision Engineering",
          icon: Target,
        },
        {
          type: "text-icon",
          text: "Pro-Grade Materials",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Data-Driven Results",
          icon: LineChart,
        },
        {
          type: "text-icon",
          text: "Injury Prevention",
          icon: Activity,
        },
        {
          type: "text-icon",
          text: "Fast Recovery",
          icon: Zap,
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "No cheap, mass-produced gear",
          "No wasted practice time",
          "No guesswork in training",
        ],
      }}
      positiveCard={{
        items: [
          "Injury prevention focused",
          "Professional-grade materials",
          "Position-specific design",
        ],
      }}
      title="Why Pitch Lab?"
      description="We bridge the gap between amateur effort and professional results through gear designed for data-driven improvement."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Precision Rebounder",
          price: "$129.99",
          imageSrc: "http://img.b2bpic.net/free-photo/pair-gloves-boxing-sport_23-2150367683.jpg",
        },
        {
          id: "2",
          name: "Elite Grip Insoles",
          price: "$45.00",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-diversity-sport-woman-training_23-2149174792.jpg",
        },
        {
          id: "3",
          name: "Pro Goalkeeper Gloves",
          price: "$89.50",
          imageSrc: "http://img.b2bpic.net/free-photo/football-player-training_23-2147813154.jpg",
        },
      ]}
      title="Elite Training Gear"
      description="Essential equipment designed to sharpen your skills and elevate your match day performance."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15%",
          title: "Agility Increase",
          items: [
            "Validated test results",
            "Optimized gear weight",
          ],
        },
        {
          id: "m2",
          value: "22%",
          title: "Impact Recovery",
          items: [
            "Advanced compression",
            "Muscle support tech",
          ],
        },
        {
          id: "m3",
          value: "100%",
          label: "Gear Durability",
          title: "Field Proven",
          items: [
            "Stress tested builds",
            "Weather resistant",
          ],
        },
      ]}
      title="Performance Science"
      description="Our accessories are backed by biomechanical principles to ensure you get the absolute most out of every sprint and strike."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Game Changer",
          quote: "The grip socks completely changed how I cut on the pitch. Unmatched stability.",
          name: "Sarah J.",
          role: "Midfielder",
          imageSrc: "http://img.b2bpic.net/free-photo/amateur-football-concept-with-goalkeeper_23-2147833444.jpg",
        },
        {
          id: "2",
          title: "Professional Quality",
          quote: "Finally, equipment that doesn't feel like a toy. It's built for real training.",
          name: "Marcus R.",
          role: "Coach",
          imageSrc: "http://img.b2bpic.net/free-photo/sportive-man-with-headphones-looking-away_23-2148303396.jpg",
        },
        {
          id: "3",
          title: "Recover Faster",
          quote: "The compression gear helps me back on the field two days faster than before.",
          name: "Elena K.",
          role: "Defender",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-male-hands-tying-up-sport-shoes_1262-4792.jpg",
        },
        {
          id: "4",
          title: "Top Tier Gear",
          quote: "The reaction balls are standard for our training sessions now. Exceptional quality.",
          name: "David L.",
          role: "Goalkeeper",
          imageSrc: "http://img.b2bpic.net/free-photo/football-player-executing-free-kick_23-2147644513.jpg",
        },
        {
          id: "5",
          title: "Precision",
          quote: "Precision matters when you're turning pro. This gear is the best I've found.",
          name: "Tom W.",
          role: "Forward",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-playing-soccer_23-2150405401.jpg",
        },
      ]}
      title="Players Upgraded"
      description="Join the growing community of players transforming their game with Pitch Lab."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to elevate your training? Sign up for exclusive gear drops and expert coaching tips."
      buttons={[
        {
          text: "Contact Support",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="PITCH LAB"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Training",
              href: "#features",
            },
            {
              label: "Products",
              href: "#products",
            },
            {
              label: "Bundles",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Science",
              href: "#metrics",
            },
            {
              label: "Reviews",
              href: "#testimonials",
            },
            {
              label: "About",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
