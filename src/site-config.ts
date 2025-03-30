export const SiteConfig = {
  title: "SEEN-UP",
  description: "Collect and showcase powerful video and text testimonials",
  prodUrl: "https://seen-up.vercel.app",
  domain: "seen-up.vercel.app",
  appIcon: "/images/icon.png",
  company: {
    name: "SEEN-UP",
    address: "", // Remove if not needed
  },
  brand: {
    primary: "#007291", // You can adjust this to your brand color
  },
  team: {
    image: "/images/manoa.png",
    website: "https://seen-up.vercel.app",
    twitter: "https://twitter.com/manoaraz",
    name: "Manoa",
  },
  features: {
    /**
     * If enable, you need to specify the logic of upload here : src/features/images/uploadImageAction.tsx
     * You can use Vercel Blob Storage : https://vercel.com/docs/storage/vercel-blob
     * Or you can use Cloudflare R2 : https://mlv.sh/cloudflare-r2-tutorial
     * Or you can use AWS S3 : https://mlv.sh/aws-s3-tutorial
     */
    enableImageUpload: false as boolean,
    /**
     * If enable, the user will be redirected to `/orgs` when he visits the landing page at `/`
     * The logic is located in middleware.ts
     */
    enableLandingRedirection: false as boolean,
  },
};
