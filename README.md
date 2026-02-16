# Nili's Nail and Beauty Lounge

A luxury nail and beauty salon website featuring elegant design, professional services, and an AI-powered beauty consultant.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and add your Gemini API key:
   ```bash
   cp .env.example .env.local
   ```
   Get your API key at: https://aistudio.google.com/apikey
3. Run the app:
   ```bash
   npm run dev
   ```

## Deploy to Vercel

1. Push your code to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and import your repository.
3. Vercel will auto-detect the Vite framework.
4. Add the environment variable in **Project Settings → Environment Variables**:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your Gemini API key
5. Click **Deploy**.

Your site will be live at `your-project.vercel.app`.
