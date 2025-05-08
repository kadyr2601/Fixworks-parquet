import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Path to the sitemap file
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml")

    // Read the sitemap file
    const sitemap = fs.readFileSync(sitemapPath, "utf-8")

    // Return the sitemap with the correct content type
    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    })
  } catch (error) {
    console.error("Error serving sitemap:", error)
    return new NextResponse("Error generating sitemap", { status: 500 })
  }
}
