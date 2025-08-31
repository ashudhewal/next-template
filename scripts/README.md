# Firecrawl Scraper Script

This script allows you to scrape websites using the Firecrawl API and save the results locally.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Add your Firecrawl API key to the `.env` file:
     ```
     FIRECRAWL_API_KEY=your_actual_api_key_here
     ```

## Usage

Run the script from the project root:
```bash
node scripts/firecrawl-scraper.cjs
```

The script will:
1. Prompt you for a website URL
2. Scrape the website using Firecrawl API
3. Save the results in a timestamped folder:
   - `content.md` - Markdown version
   - `content.html` - HTML version
   - `screenshot.png` - Full-page screenshot
   - `metadata.json` - Additional metadata

## Security Notes

- The `.env` file is automatically ignored by git (see `.gitignore`)
- Never commit your actual API keys to version control
- Use `.env.example` to show other developers what environment variables are needed

## Requirements

- Node.js
- Firecrawl API key
- Internet connection
