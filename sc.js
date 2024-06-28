import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

async function scrapeBrainly(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const content = await page.evaluate(() => {
    // Extract text content
    const textContent = document.body.innerText;
    
    // Extract source code
    const sourceCode = document.documentElement.outerHTML;
    
    return { textContent, sourceCode };
  });

  await browser.close();
  return content;
}

// Usage example
const url = 'https://brainly.co.id/tugas/1234567'; // Replace with actual Brainly URL
try {
  const { textContent, sourceCode } = await scrapeBrainly(url);
  console.log('Text content:', textContent);
  console.log('Source code:', sourceCode);
} catch (error) {
  console.error('Error:', error);
}
