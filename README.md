This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# CascadeIQ - AI-Powered Supply Chain Intelligence Platform

A production-quality web platform for the Google Solution Challenge, demonstrating real-time supply chain disruption detection and mitigation using Google Cloud Platform services and machine learning.

## 🎯 Overview

CascadeIQ combines **Vertex AI**, **Pub/Sub**, **BigQuery**, and **Firebase** to create an intelligent supply chain management system that:

- Detects disruptions in real-time
- Predicts cascade impacts before they spread
- Recommends AI-optimized solutions
- Visualizes complex supply chain relationships
- Delivers actionable insights to stakeholders instantly

**Key Metric:** From disruption to recommendation in **< 2 seconds**

## 🚀 Key Features

### Live Demo Section
- **Simulate Disruption** button to trigger backend API
- Real-time disruption cards showing location, delay hours, severity
- Confidence scores and affected entity counts
- Pipeline execution trace visualization
- AI-powered recommendations with cost savings

### Interactive Components
- Animated pipeline flow (Pub/Sub → Vertex AI → BigQuery → API)
- Dependency graph showing supply chain entities
- Real-time metrics dashboard
- Mobile app preview section

### Design & UX
- Modern dark theme optimized for presentations
- Smooth Framer Motion animations
- Responsive across all devices
- Professional gradient effects and styling

## 💡 Demo Flow (< 30 seconds)

1. Click **"Simulate Disruption"** button
2. See pipeline stages execute with animations
3. Disruption card appears with real data
4. View affected entities and impact estimates
5. Review AI recommendations with savings calculations
6. Understand mitigation strategies

## 🛠️ Tech Stack

**Frontend:**
- Next.js 16 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React icons
- Axios for API calls

**Backend Integration:**
- Google Pub/Sub
- Vertex AI
- BigQuery
- Firebase
- FastAPI (or any REST API)

**Deployment:**
- Optimized for Vercel
- Can run on any Node.js host

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build
npm start
```

App runs on `http://localhost:3000`

## 🔌 Backend API

The platform works in two modes:

**1. With Backend** (http://localhost:8000):
- Sends simulation request to `/simulate`
- Fetches data from `/latest-event`
- Real-time processing pipeline

**2. Without Backend** (Automatic Fallback):
- Uses high-fidelity mock data
- Demonstrates full functionality
- Ideal for presentations

## 📱 Responsive Design

Fully responsive on all screen sizes:
- Mobile (375px+)
- Tablet (768px+)
- Desktop (1024px+)
- Ultra-wide (1920px+)

## 🎨 Components

- `HeroSection.tsx` - Introduction and stats
- `ProblemSection.tsx` - Disruption impact visualization
- `SolutionFlow.tsx` - Pipeline animation
- `LiveDemo.tsx` - Interactive demo (core feature)
- `PipelineTrace.tsx` - Execution timeline
- `RecommendationCards.tsx` - AI solutions
- `DependencyGraph.tsx` - Supply chain visualization
- `MetricsPanel.tsx` - Real-time statistics
- `TechStackSection.tsx` - Infrastructure overview
- `AppPreviewSection.tsx` - Mobile app mockups
- `Footer.tsx` - Contact and links

## 📊 Key Metrics Displayed

- Processing Latency: < 2000ms
- Model Accuracy: 94.2%
- Confidence Score: 96.8%
- Events Processed: 2,847+/hour
- Affected Entities: 47+ per disruption

## 🎯 Perfect For

✅ Google Solution Challenge judges
✅ Enterprise supply chain teams
✅ IoT and logistics companies
✅ AI/ML solution demonstrations
✅ Real-time decision platforms

---

**CascadeIQ**: Because disruptions spread fast. Solutions should be faster.
