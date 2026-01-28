# RevOps - Resilient Operations

> A modern, professional, and futuristic supply chain resilience simulator dashboard. Navigate supply chain disruptions like a flight simulator with real-time analytics, gamified interactions, and collaborative decision-making tools.

## 🚀 Overview

RevOps is a cutting-edge web dashboard that transforms supply chain management into an interactive, data-driven experience. Built with a sleek, cockpit-inspired interface, it provides enterprise and SME users with powerful tools to simulate, analyze, and mitigate supply chain disruptions in real-time.

### Key Features

- **🎯 Dual Mode Access**: Separate Enterprise and SME login paths with tailored experiences
- **📊 Interactive Dashboards**: Real-time resilience metrics with animated gauges and cockpit-style displays
- **🌍 Disruption Heatmaps**: Geographic visualization of global supply chain risks
- **🎮 Gamified Simulator**: Interactive disruption scenarios with dynamic sliders and real-time impact analysis
- **👥 Collaboration Mode**: Role-based panels for supply chain managers, operations teams, and executives
- **🌱 ESG & Insurance Tracking**: Compliance monitoring and insurance coverage optimization
- **📈 Advanced Reporting**: Export capabilities and comprehensive analytics

## 🎨 Design Philosophy

RevOps features a **flight simulator aesthetic** for supply chains with:

- **Color Palette**: Deep blues, teal (#14b8a6), eco-green (#10b981), with orange/red accents for disruptions
- **Visual Style**: Neumorphic shadows, glassmorphic cards, and sleek minimal enterprise design
- **Animations**: Smooth Motion (Framer Motion) transitions and animated gauges
- **Data Viz**: Recharts-powered cockpit-style displays and interactive metrics

## 🛠️ Tech Stack

### Core Technologies

- **React 18** - Modern UI framework with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with custom design tokens
- **Motion (Framer Motion)** - Fluid animations and transitions

### Key Libraries

- **Recharts** - Interactive data visualizations and charts
- **Lucide React** - Beautiful icon system
- **Shadcn/ui** - High-quality component library
- **React Hooks** - State management with `useState`, `useMemo` for optimized performance

## 📁 Project Structure

```
revops/
├── App.tsx                           # Main application entry point
├── components/
│   ├── LoginPage.tsx                 # Landing page with mode selection
│   ├── Navigation.tsx                # Top navigation bar
│   ├── MainDashboard.tsx             # Core dashboard with metrics
│   ├── ResilienceGauge.tsx           # Animated resilience index meter
│   ├── DisruptionHeatmap.tsx         # Geographic risk visualization
│   ├── DisruptionSimulator.tsx       # Interactive disruption scenarios
│   ├── CollaborationMode.tsx         # Team collaboration interface
│   ├── ESGInsurance.tsx              # ESG tracking and compliance
│   ├── ReportsExports.tsx            # Reporting and data export
│   ├── figma/
│   │   └── ImageWithFallback.tsx     # Image component with fallback
│   └── ui/                           # Shadcn UI component library
├── styles/
│   └── globals.css                   # Global styles and design tokens
└── README.md                         # This file
```

## 🚦 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd revops
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 💡 Usage Guide

### 1. Login & Mode Selection

- Choose between **Enterprise** or **SME** mode on the landing page
- Each mode provides tailored features for different business sizes

### 2. Main Dashboard

- View real-time **resilience index** with animated gauges
- Monitor **active routes**, **cost savings**, **recovery times**, and **risk trends**
- Track live **alerts** and **disruption notifications**
- Explore the **disruption heatmap** for geographic risk analysis

### 3. Disruption Simulator

- Run **"what-if" scenarios** using interactive sliders
- Adjust parameters like:
  - Port congestion levels
  - Weather severity
  - Supplier reliability
  - Fuel cost fluctuations
- View **real-time impact** on resilience scores and operational metrics

### 4. Collaboration Mode

- Access **role-based panels** for different team members:
  - Supply Chain Manager view
  - Operations Team dashboard
  - Executive summary
- Share insights and coordinate responses to disruptions

### 5. ESG & Insurance

- Track **sustainability metrics** and carbon footprint
- Monitor **compliance scores** with industry regulations
- Optimize **insurance coverage** based on risk profiles
- View ESG performance trends over time

### 6. Reports & Exports

- Generate comprehensive **PDF/CSV reports**
- Export data for external analysis
- Access historical trends and performance benchmarks

## ⚡ Performance Optimizations

RevOps has been optimized for smooth performance:

- **`useMemo` hooks** for expensive calculations and static data
- **Reduced animation complexity** to prevent rendering timeouts
- **Optimized re-renders** with proper dependency arrays
- **Lazy loading** for large datasets
- **Efficient chart rendering** with Recharts

### Known Optimizations

All components have been refactored with performance in mind, including:
- Memoized alert lists, metrics, and static data
- Simplified animation triggers
- Optimized gauge calculations
- Reduced motion for accessibility

## 🎯 Component Overview

### Core Components

#### `<LoginPage />`
Landing page with animated background and dual-mode selection cards.

#### `<Navigation />`
Top navigation bar with section routing and active state management.

#### `<MainDashboard />`
Main interface featuring:
- Key metrics cards (routes, savings, recovery time, risk)
- Real-time alerts feed
- Resilience gauges
- Disruption heatmap

#### `<ResilienceGauge />`
Animated circular gauge showing resilience index (0-100) with color-coded risk levels.

#### `<DisruptionHeatmap />`
Interactive geographic heatmap built with Recharts, visualizing global supply chain risks.

#### `<DisruptionSimulator />`
Gamified interface with:
- Interactive sliders for scenario parameters
- Real-time impact calculations
- Visual feedback with color-coded metrics

#### `<CollaborationMode />`
Team collaboration interface with role-based views and shared decision-making tools.

#### `<ESGInsurance />`
ESG tracking dashboard with:
- Carbon footprint monitoring
- Compliance scores
- Insurance optimization recommendations

#### `<ReportsExports />`
Reporting interface with data export capabilities and historical analytics.

## 🎨 Design Tokens

Custom design tokens are defined in `/styles/globals.css`:

```css
--primary: #14b8a6;        /* Teal - brand color */
--accent: #0d9488;         /* Teal-600 - accents */
--chart-1: #14b8a6;        /* Teal - charts */
--chart-2: #10b981;        /* Emerald - eco metrics */
--chart-3: #3b82f6;        /* Blue - operations */
--chart-4: #f59e0b;        /* Amber - warnings */
--chart-5: #ef4444;        /* Red - disruptions */
--background: #0f172a;     /* Slate-900 - dark bg */
--card: #1e293b;           /* Slate-800 - cards */
```

## 🔧 Customization

### Changing Color Palette

Edit the CSS variables in `/styles/globals.css` under `:root`:

```css
:root {
  --primary: #your-color;
  --accent: #your-accent;
  /* ... */
}
```

### Adding New Metrics

In `MainDashboard.tsx`, extend the `metrics` array:

```typescript
const metrics = useMemo(() => [
  { label: 'Your Metric', value: '100', icon: YourIcon, color: 'text-color', delay: 0.5 },
  // ...
], []);
```

### Creating New Sections

1. Create component in `/components/YourSection.tsx`
2. Import in `App.tsx`
3. Add to `ActiveSection` type
4. Update `renderActiveSection()` switch statement
5. Add navigation item in `Navigation.tsx`

## 🐛 Troubleshooting

### Performance Issues

If you experience slow rendering:
- Check that all large datasets are wrapped in `useMemo`
- Reduce animation duration in Motion components
- Limit the number of data points in charts

### Styling Issues

If styles don't apply correctly:
- Ensure Tailwind classes are not conflicting
- Check that `/styles/globals.css` is imported in your build
- Clear browser cache and restart dev server

### Component Not Rendering

- Verify imports are correct
- Check for TypeScript errors in the console
- Ensure props are passed correctly from parent components

## 📦 Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The optimized production build will be in the `/dist` directory.
