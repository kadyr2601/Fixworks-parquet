import fs from "fs"
import path from "path"
import { format } from "date-fns"

// Define the base URL of your website
const BASE_URL = "https://premiumparquet.ae"

// Define the pages to include in the sitemap
const pages = [
  {
    url: "/",
    lastmod: new Date(),
    changefreq: "weekly",
    priority: 1.0,
    image: "/dubai-luxury-interior.png",
    imageTitle: "Premium Parquet Dubai - Luxury Flooring Services",
  },
  {
    url: "/about",
    lastmod: new Date(),
    changefreq: "monthly",
    priority: 0.8,
    image: "/luxury-parquet-golden-light.png",
    imageTitle: "About Premium Parquet Dubai",
  },
  {
    url: "/contact",
    lastmod: new Date(),
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/services/parquet-sanding",
    lastmod: new Date(),
    changefreq: "monthly",
    priority: 0.9,
    image: "/parquet-sanding-process.png",
    imageTitle: "Parquet Sanding and Refinishing Services",
  },
  {
    url: "/services/parquet-installation",
    lastmod: new Date(),
    changefreq: "monthly",
    priority: 0.9,
    image: "/parquet-installation-hero.jpg",
    imageTitle: "Luxury Parquet Installation Services",
  },
  {
    url: "/services/parquet-cleaning",
    lastmod: new Date(),
    changefreq: "monthly",
    priority: 0.9,
    image: "/parquet-cleaning-hero.jpg",
    imageTitle: "Professional Parquet Cleaning Services",
  },
  {
    url: "/services/local-restoration",
    lastmod: new Date(),
    changefreq: "monthly",
    priority: 0.9,
    image: "/local-restoration-hero.png",
    imageTitle: "Precision Parquet Restoration Services",
  },
]

// Generate the sitemap XML
function generateSitemap() {
  const today = format(new Date(), "yyyy-MM-dd")

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
  sitemap += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'

  // Add each page to the sitemap
  pages.forEach((page) => {
    sitemap += "  <url>\n"
    sitemap += `    <loc>${BASE_URL}${page.url}</loc>\n`
    sitemap += `    <lastmod>${today}</lastmod>\n`
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`
    sitemap += `    <priority>${page.priority}</priority>\n`

    // Add image information if available
    if (page.image) {
      sitemap += "    <image:image>\n"
      sitemap += `      <image:loc>${BASE_URL}${page.image}</image:loc>\n`
      sitemap += `      <image:title>${page.imageTitle}</image:title>\n`
      sitemap += "    </image:image>\n"
    }

    sitemap += "  </url>\n"
  })

  sitemap += "</urlset>"

  // Write the sitemap to a file
  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap)
  console.log("Sitemap generated successfully!")
}

// Execute the function
generateSitemap()
