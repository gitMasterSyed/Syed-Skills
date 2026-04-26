# Syed Sajid - Personal Portfolio

A professional personal portfolio website for **Syed Sajid**, an Enterprise Applications & Integration Specialist with 13+ years of experience. This application showcases his skills, career trajectory, certifications, and technical expertise in a modern, responsive interface.

## 🚀 Live Demo
The application is deployed and can be viewed at:
[https://ais-pre-blbqywqge4lxbuo6sbevi7-220733212679.europe-west2.run.app](https://ais-pre-blbqywqge4lxbuo6sbevi7-220733212679.europe-west2.run.app)

## ✨ Features
- **Digital Business Card:** Offline QR code generation (vCard) for instant contact saving on iOS and Android.
- **Zero Local Dependencies:** Now uses CDNs for React, Tailwind, and Motion. No `npm install` required for development or direct viewing.
- **Modern UI/UX:** Built with Tailwind CSS for a sleek, dark-themed aesthetic.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Interactive Sections:** Highlighted certifications, detailed experience timeline, and educational background.

## 🛠️ Built With
- **React 18** (CDN)
- **Tailwind CSS 4** (CDN)
- **Motion** (CDN)
- **Lucide Icons** (CDN)
- **Vite** (Optional Dev Server)

## 📦 Getting Started

### Direct Viewing
Since this version uses CDNs, you can simply open `index.html` in any web browser.

### Local Development (Optional)
If you want to use a local server:
1. Start a simple static server or use Vite:
   ```bash
   npm run dev
   ```

### Building for Production
To create a production build, run:
```bash
npm run build
```
The output will be in the `dist` directory.

## 📂 Project Structure
- `src/components/`: Reusable React components (Header, Skills, Experience, etc.)
- `src/types.ts`: TypeScript interfaces and type definitions.
- `src/index.css`: Global styles using Tailwind CSS.
- `public/`: Static assets.

## 🔧 Recent Maintenance & Technical Debt
- **Zero-Dependency Migration:** Moved all major libraries (React, Tailwind, Motion, Lucide) to CDNs to eliminate the need for `npm install`.
- **Single File Architecture:** Consolidated codebase into a single `index.html` for maximum portability.

---
© 2026 Syed Sajid. Built with ❤️ using modern web technologies.
