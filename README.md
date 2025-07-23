# CivilSignals Investor Pitch Website

A stunning, professional investor pitch website for CivilSignals - "The Palantir of ESG". Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Interactive map with animated hotspots showing ESG risk areas
- **Card Series**: Digestible sections covering problem, solution, and investment opportunity
- **Responsive Design**: Optimized for all devices
- **Smooth Animations**: Framer Motion powered interactions
- **Professional Aesthetic**: Inspired by Palantir's design language

## Design Philosophy

Inspired by:
- **Jony Ive**: Minimalist elegance and essentialism
- **Steve Jobs**: Insanely great user experience
- **Sheryl Sandberg**: Clear, purposeful communication
- **Tobias von Schneider**: Emotional design signatures
- **Edwin Land**: Making the invisible visible

## Color Palette

- Deep Blues: `#1E3A8A`
- Vibrant Greens: `#10B981`
- Crisp Whites with gradients for trust and innovation

## Deployment to Vercel

1. **Install Vercel CLI**:
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **Deploy**:
   \`\`\`bash
   vercel --prod
   \`\`\`

3. **Custom Domain** (Optional):
   - Add `invest.civilsignals.com` in Vercel dashboard
   - Update DNS settings to point to Vercel

## Local Development

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Run development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open** [http://localhost:3000](http://localhost:3000)

## File Structure

\`\`\`
├── app/
│   ├── page.tsx          # Main investor pitch page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/ui/        # Reusable UI components
├── public/
│   └── freemium-report.pdf  # Jackson freemium report (to be added)
└── README.md
\`\`\`

## Integration Notes

### Freemium Report
Add the Jackson freemium report to `/public/freemium-report.pdf` and link it from the "Download Report" button.

### Real Data Integration
Replace placeholder components with:
- **MineralsWaterGauge**: For Jackson tract ID 28049001100
- **Real ESG Metrics**: Connect to actual data sources
- **Interactive Map**: Integrate with mapping services for real hotspot data

### Analytics
Add Vercel Analytics for investor engagement tracking:
\`\`\`bash
npm install @vercel/analytics
\`\`\`

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for animations
- Optimized bundle size
- Fast loading times for investor presentations

## Contact

For technical questions about deployment or customization, contact the development team.
