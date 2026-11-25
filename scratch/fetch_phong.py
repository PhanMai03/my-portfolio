import urllib.request
import re
import json

url = "https://nguyen-ngoc-phong.vercel.app/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
    with open("scratch/phong_site.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("Downloaded HTML, length:", len(html))
    
    # Extract sections, headings, classes, and structure
    sections = re.findall(r'<section[^>]*id=[\"\']([^\"\']+)[\"\'][^>]*>', html)
    print("Section IDs:", sections)
    
    h1_h2 = re.findall(r'<(h[1-3])[^>]*>(.*?)</\1>', html, re.DOTALL)
    for tag, content in h1_h2[:25]:
        clean = re.sub(r'<[^>]+>', ' ', content).strip()
        clean = re.sub(r'\s+', ' ', clean)
        print(f"{tag}: {clean}")

    # Find css assets
    css = re.findall(r'href=[\"\']([^\"\']+\.css)[\"\']', html)
    print("CSS:", css)
except Exception as e:
    print("Error:", e)
