// import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

// async function scrapeBrainly(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);

//   const content = await page.evaluate(() => {
//     // Extract text content
//     const textContent = document.body.innerText;
    
//     // Extract source code
//     const sourceCode = document.documentElement.outerHTML;
    
//     return { textContent, sourceCode };
//   });

//   await browser.close();
//   return content;
// }

// // Usage example
// const url = 'https://brainly.co.id/'; // Replace with actual Brainly URL
// scrapeBrainly(url).then(({ textContent, sourceCode }) => {
//   console.log('Text content:', textContent);
//   console.log('Source code:', sourceCode);
// }).catch(error => {
//   console.error('Error:', error);
// });







const puppeteer = require('puppeteer');

async function getPageSource() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://example.com'); // Ganti dengan URL halaman yang diinginkan
  
  // Menunggu hingga aktivitas jaringan idle selama setidaknya 500 milidetik
  await page.waitForFunction(
    'window.performance.timing.loadEventEnd - window.performance.timing.navigationStart >= 500'
  );
  
  // Mengambil kode sumber HTML halaman
  const pageSourceHTML = await page.content();
  
  // Menutup browser
  await browser.close();
  
  return pageSourceHTML;
}

getPageSource()
  .then(source => console.log(source))
  .catch(error => console.error('Gagal mengambil kode sumber:', error));










// const puppeteer = require('puppeteer');

// async function getSourceCode(url) {
//   try {
//     // Buka browser
//     const browser = await puppeteer.launch();
    
//     // Buka tab baru
//     const page = await browser.newPage();
    
//     // Pergi ke URL yang ditentukan
//     await page.goto(url, { waitUntil: 'networkidle0' });
    
//     // Dapatkan source code
//     const sourceCode = await page.content();
    
//     // Tutup browser
//     await browser.close();
    
//     return sourceCode;
//   } catch (error) {
//     console.error('Terjadi kesalahan:', error);
//   }
// }

// // Contoh penggunaan
// const url = 'https://example.com'; // Ganti dengan URL yang sah
// getSourceCode(url).then((sourceCode) => {
//   console.log(sourceCode);
// }).catch((error) => {
//   console.error('Gagal mendapatkan source code:', error);
// });
