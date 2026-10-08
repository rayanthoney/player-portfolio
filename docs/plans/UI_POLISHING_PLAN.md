# UI Polishing Implementation Plan — Elite Prospect

This document outlines the proposed visual and interaction refinements to elevate the "Elite Prospect" scouting dossier experience to a state-of-the-art level using GSAP and modern CSS techniques.

## 1. Objectives
- **Premium Aesthetic**: Enhance the "intel report" vibe with subtle technical details and grid-based visuals.
- **Dynamic Interaction**: Implement high-end animations that guide the coach's eye through the athlete's dossier.
- **Weightless Feeling**: Use glassmorphism and subtle parallax to create a "futuristic intel" depth of field.

## 2. Technical Refinements (GSAP)
- **Entrance Sequences**: 
  - Use `gsap.from()` with `stagger` for the "A serious scouting profile" hero text on the Landing Page.
  - Implement `ScrollTrigger` to animate the appearance of dossier sections (Stats Bar, Scouting Analysis, Film Grid) as the user scrolls.
- **Holographic Card Depth**: 
  - Apply a subtle `mousemove` listener to the `PlayerCard` to rotate the card on its axes, creating a 3D depth effect.
  - Add a light-sweep gradient bloom that follows the cursor on the `PlayerCard`.

## 3. Visual Styling (CSS/Tailwind v4)
- **Animated Mesh Backgrounds**:
  - Add a dedicated `<MeshBackground />` component that uses CSS `keyframes` to slowly drift primary-colored orbs behind the glass layers.
- **Enhanced Glassmorphism**:
  - Refine the `sticky` Stats Bar in `PlayerPage` with `backdrop-blur-2xl` and a dual-border effect (inner glow + outer dark border).
  - Update the `TournamentModal` (if applicable) and general UI cards to have a consistent glass design token.

## 4. Micro-Interactions
- **Button "Sweep" Effect**:
  - Customize the `Button` component to have an `:after` pseudo-element that performs a light-sweep animation on hover.
- **Icon Pulse & Glow**:
  - Add subtle glows to Lucide icons used in the `ScoutingAnalysis` section to reinforce the "Active Intel" theme.

## 5. Implementation Roadmap
1. **Foundation**: Create the `MeshBackground.tsx` and integrate it into the root layout.
2. **GSAP Setup**: Initialize a standard `gsap` configuration and utility for `ScrollTrigger` registrations.
3. **Component Refresh**: Update the `PlayerCard` and `Button` components with the new polishing tokens.
4. **Section Polish**: Apply scroll-reveal animations to `Home` and `PlayerPage` sections.
5. **Final QA**: Review performance on mobile devices to ensure backdrop-blurs don't impact frame rate.

---
**Branch:** `style/ui-polishing-plan`
**Author:** rayanthoney / Antigravity
