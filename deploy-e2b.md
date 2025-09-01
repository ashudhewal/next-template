# Deploy Lindy AI Clone to E2B

## Quick Deploy Steps

Since this is a Next.js application, you can deploy it to E2B or any other hosting platform. Here are your options:

### Option 1: Deploy to Vercel (Recommended for Next.js)
1. Push this code to a GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click

### Option 2: Deploy to Netlify
1. Build the project: `npm run build`
2. The static files will be in the `.next` folder
3. Deploy to Netlify via their UI or CLI

### Option 3: Deploy to E2B
E2B (e2b.dev) is primarily for running AI agents and sandboxed code execution, not for hosting web applications. 

For web hosting, you'll want to use:
- **Vercel** (best for Next.js): https://vercel.com
- **Netlify**: https://netlify.com
- **Railway**: https://railway.app
- **Render**: https://render.com

### Option 4: Run Locally and Share via Tunneling
If you want to quickly share this with others:
1. Install ngrok: `npm install -g ngrok`
2. Run the dev server: `npm run dev`
3. In another terminal: `ngrok http 3000`
4. Share the generated URL

## Project Structure
This is a standard Next.js 15 application with:
- React 19
- Tailwind CSS
- Framer Motion animations
- shadcn/ui components
- Fully responsive design
- Dark theme

## Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables
No environment variables are required for the basic setup.

## Repository Files
All the code is ready to be pushed to a Git repository and deployed to any modern hosting platform.