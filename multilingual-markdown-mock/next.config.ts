import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";

// Internationalization (i18n)
const withNextIntl = createNextIntlPlugin();

// Markdown and MDX
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

// Merge configs
export default withNextIntl(withMDX(nextConfig));
