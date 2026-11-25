const https = require('https');
const fs = require('fs');

const url = 'https://nguyen-ngoc-phong.vercel.app/';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scratch/phong_site.html', data);
    console.log('Downloaded length:', data.length);
    
    // Check headings
    const headings = data.match(/<h[1-4][^>]*>[\s\S]*?<\/h[1-4]>/gi) || [];
    console.log('--- HEADINGS ---');
    headings.forEach(h => {
      const clean = h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      console.log(clean);
    });

    // Check sections
    const sections = data.match(/<section[^>]*id=["']([^"']+)["'][^>]*>/gi) || [];
    console.log('--- SECTIONS ---');
    console.log(sections);

    // Check script/css assets
    const css = data.match(/href=["'][^"']+\.css["']/gi) || [];
    console.log('--- CSS ---', css);
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
