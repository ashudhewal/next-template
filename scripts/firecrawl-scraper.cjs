
#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to make HTTP request
function makeRequest(options, postData) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    resolve(parsed);
                } catch (error) {
                    reject(new Error(`Failed to parse response: ${error.message}`));
                }
            });
        });
        
        req.on('error', (error) => {
            reject(error);
        });
        
        if (postData) {
            req.write(postData);
        }
        
        req.end();
    });
}

// Function to download file from URL
function downloadFile(url, filePath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filePath);
        
        https.get(url, (response) => {
            response.pipe(file);
            
            file.on('finish', () => {
                file.close();
                resolve();
            });
            
            file.on('error', (error) => {
                fs.unlink(filePath, () => {}); // Delete the file on error
                reject(error);
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

// Function to scrape website using Firecrawl
async function scrapeWebsite(url, apiKey) {
    const options = {
        hostname: 'api.firecrawl.dev',
        port: 443,
        path: '/v2/scrape',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        }
    };

    const requestBody = {
        url: url,
        formats: [
            'html',
            'markdown',
            {
                type: 'screenshot',
                fullPage: true,
                quality: 90
            }
        ],
        onlyMainContent: true,
        removeBase64Images: true,
        includeTags: [],
        excludeTags: []
    };

    const postData = JSON.stringify(requestBody);
    
    try {
        const response = await makeRequest(options, postData);
        
        if (!response.success) {
            throw new Error(response.error || 'Scraping failed');
        }
        
        return response.data;
    } catch (error) {
        throw new Error(`Failed to scrape website: ${error.message}`);
    }
}

// Function to create directory and save files
async function saveScrapedData(data, websiteUrl) {
    // Create folder name from URL
    const urlObj = new URL(websiteUrl);
    const folderName = urlObj.hostname.replace(/\./g, '_') + '_' + Date.now();
    const folderPath = path.join(process.cwd(), folderName);
    
    // Create directory
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    
    console.log(`\nSaving files to: ${folderPath}`);
    
    // Save markdown
    if (data.markdown) {
        const markdownPath = path.join(folderPath, 'content.md');
        fs.writeFileSync(markdownPath, data.markdown);
        console.log('✓ Markdown saved as content.md');
    }
    
    // Save HTML
    if (data.html) {
        const htmlPath = path.join(folderPath, 'content.html');
        fs.writeFileSync(htmlPath, data.html);
        console.log('✓ HTML saved as content.html');
    }
    
    // Save screenshot
    if (data.screenshot) {
        const screenshotPath = path.join(folderPath, 'screenshot.png');
        try {
            await downloadFile(data.screenshot, screenshotPath);
            console.log('✓ Screenshot saved as screenshot.png');
        } catch (error) {
            console.error('✗ Failed to save screenshot:', error.message);
        }
    }
    
    // Save metadata
    if (data.metadata) {
        const metadataPath = path.join(folderPath, 'metadata.json');
        fs.writeFileSync(metadataPath, JSON.stringify(data.metadata, null, 2));
        console.log('✓ Metadata saved as metadata.json');
    }
    
    console.log(`\nAll files saved successfully in: ${folderName}/`);
}

// Load environment variables from .env file
require('dotenv').config();

// Get API key from environment variables
const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY;

// Main function
async function main() {
    console.log('🔥 Firecrawl Website Scraper\n');
    
    // Use API key from environment variables
    const apiKey = FIRECRAWL_API_KEY;
    
    if (!apiKey || apiKey === 'your_firecrawl_api_key_here') {
        console.error('❌ Please add your Firecrawl API key to the .env file');
        rl.close();
        return;
    }
    
    // Get website URL
    const websiteUrl = await new Promise((resolve) => {
        rl.question('Enter the website URL to scrape: ', (answer) => {
            resolve(answer.trim());
        });
    });
    
    if (!websiteUrl) {
        console.error('❌ Website URL is required');
        rl.close();
        return;
    }
    
    // Validate URL
    try {
        new URL(websiteUrl);
    } catch (error) {
        console.error('❌ Invalid URL format');
        rl.close();
        return;
    }
    
    console.log(`\n🚀 Scraping: ${websiteUrl}`);
    console.log('⏳ This may take a few seconds...\n');
    
    try {
        // Scrape the website
        const scrapedData = await scrapeWebsite(websiteUrl, apiKey);
        
        // Save the scraped data
        await saveScrapedData(scrapedData, websiteUrl);
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
    
    rl.close();
}

// Run the script
if (require.main === module) {
    main().catch((error) => {
        console.error('❌ Unexpected error:', error.message);
        process.exit(1);
    });
}

wget -p -k -E -H \                                                          
  --restrict-file-names=windows,ascii \
  --trust-server-names \
  --no-clobber \      
  --adjust-extension \
  --page-requisites \
  --convert-links \   
  --backup-converted \     
  --reject-regex=".*\?.*" \ 
  -P intercom_site \                                                                                                <....