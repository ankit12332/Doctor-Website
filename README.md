# Healtrate.ai - AI-Powered Practice Management

A modern web application for healthcare practice management with AI-driven solutions.

## Features

- AI Agents for healthcare practice management
- Interactive AI visualization
- Solutions for healthcare challenges
- Admin dashboard for practice management
- Demo request system

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd doctor_cursor
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

To create a production build:

```bash
npm run build
```

This will create a static export in the `out` directory, which can be deployed to any static hosting service.

## Deployment

We've included a deployment script to help you deploy the application. Run:

```bash
./deploy.sh
```

This script will:
1. Build the project
2. Provide deployment options for various platforms
3. Optionally serve the static export locally for testing

### Deployment Options

#### GitHub Pages

1. Create a new repository on GitHub
2. Push the contents of the `out` directory to the `gh-pages` branch
3. Enable GitHub Pages in the repository settings

#### Netlify

1. Create a new site on Netlify
2. Set the publish directory to `out`

#### Vercel

1. Install the Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project root

#### AWS S3

1. Create an S3 bucket and enable static website hosting
2. Upload the contents of the `out` directory to the bucket
3. Configure CloudFront for CDN (optional)

#### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase: `firebase init`
3. Set the public directory to `out`
4. Deploy: `firebase deploy`

## Project Structure

- `src/app/` - Next.js app router pages
- `src/components/` - React components
- `src/config/` - Configuration files
- `src/services/` - Service modules
- `src/utils/` - Utility functions
- `public/` - Static assets

## Technologies Used

- Next.js 15.2.1
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Heroicons

## License

This project is licensed under the MIT License - see the LICENSE file for details.
