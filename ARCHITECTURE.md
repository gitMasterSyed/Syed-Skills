# Project Architecture

This document describes the high-level architecture and design decisions of the Syed Sajid Portfolio application.

## 🏗️ Technical Stack
- **Framework:** React 18 (CDN-loaded)
- **Styling:** Tailwind CSS (CDN-loaded)
- **Animation:** Framer Motion (CDN-loaded)
- **Icons:** Lucide (CDN-loaded)
- **Runtime:** Browser-native with Babel Standalone for JSX transpilation.

## 📁 Directory Structure
```text
/
├── index.html           # Single entry point containing all HTML, CSS, and React logic
├── README.md            # Project overview and usage
├── ARCHITECTURE.md      # This file
└── CONTRIBUTING.md      # Guide for contributors
```

## 🧩 Component Design
The application is a **Zero-Build React App**. All components are defined within the `<script type="text/babel">` tag in `index.html`.
- **Header:** Sticky contact info and professional summary.
- **Skills:** Grid layout with categorized technical domains.
- **Certifications:** Modern card layout showcasing expertise.
- **Experience:** A clean timeline approach.
- **Education:** Academic background.

## 🎨 Design System
- **Theme:** Dark mode (Slate 900 background).
- **Primary Color:** Cyan / Sky.
- **Typography:** Sans-serif (Inter).

## ⚙️ Configuration Choices
- **Babel Standalone:** Used to allow JSX syntax directly in the HTML file without a build step.
- **Tailwind CDN:** Provides full utility class support dynamically.
- **Lucide Icons:** Initialized via `lucide.createIcons()` to replace data attributes with SVGs.

## 🚀 Deployment Strategy
The application is purely static. Deployment involves simply serving the `index.html` file.
