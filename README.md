# React PWA Example with Vite

This repository demonstrates how to set up a Progressive Web App (PWA) using React and Vite. Follow this guide to create a PWA that is installable and provides a native app experience for your users.

---

## Features

- **React**: Build dynamic user interfaces.
- **Vite**: Lightning-fast build tool for modern web projects.
- **PWA**: Enable offline functionality, installability, and enhanced user experience.
- **Vite PWA Plugin**: Simplifies PWA setup and configuration.
- **PWA Assets Generator**: Automatically generates icons and splash screens.

---

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **NPM or Yarn**: Package manager for JavaScript.

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jszigeti/pwa-example.git
   cd pwa-example
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

Visit `http://localhost:5173` to see the app running locally.

---

## Step-by-Step Guide to PWA Setup

### 1️⃣ Install the PWA Plugin

The first step is to install the `vite-plugin-pwa`, which adds PWA capabilities to your app:

```bash
npm install -D vite-plugin-pwa
```

---

### 2️⃣ Configure Vite for PWA

Update the `vite.config.ts` file to include the PWA plugin configuration. This will define how the app behaves as a PWA:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "PWA Example",
        short_name: "PWAEx",
        start_url: "/",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#000000",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/home-desktop.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/home-mobile.png",
            sizes: "720x1280",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
```

### Explanation of `screenshots`:

The `screenshots` field in the PWA manifest enhances the user experience by providing previews of your app when users view it in an install prompt or a web store. Here’s what each property means:

- **`src`**: The path to the screenshot image.
- **`sizes`**: The dimensions of the screenshot in `width x height` format. Make sure the dimensions match the actual size of the image.
- **`type`**: The file format of the screenshot, usually `image/png`.
- **`form_factor`**: Defines the intended display device. For example:
  - `wide` for desktop or landscape views.
  - Not setting this field implies the screenshot is for mobile or portrait views.

Example:

- `/screenshots/home-desktop.png` is a desktop preview with dimensions `1280x720`.
- `/screenshots/home-mobile.png` is a mobile preview with dimensions `720x1280`.

---

### 3️⃣ Generate PWA Assets

Install `@vite-pwa/assets-generator` to generate icons and splash screens automatically:

```bash
npm install -D @vite-pwa/assets-generator
```

Add a script to your `package.json` to streamline the asset generation process:

```json
{
  "scripts": {
    "generate-pwa-assets": "pwa-assets-generator --preset minimal public/logo.svg"
  }
}
```

Run the script to generate assets:

```bash
npm run generate-pwa-assets
```

---

### 4️⃣ Add Meta Tags to `index.html`

Include the necessary meta tags in your `index.html` file to ensure your app behaves as expected:

```html
<head>
  <link rel="icon" href="/favicon.ico" />
  <link
    rel="apple-touch-icon"
    href="/apple-touch-icon-180x180.png"
    sizes="180x180"
  />
  <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF" />
  <meta name="theme-color" content="#ffffff" />
</head>
```

---

### 5️⃣ Test Your PWA using Chrome DevTools:

1. Open DevTools and go to the **Application** tab.
2. Check the **Manifest** section to verify your app's PWA compliance.
3. Run a Lighthouse audit to evaluate performance and PWA readiness.

---

## License

This project does not have a specific license. Feel free to reuse and adapt the code as needed for your own projects!

---

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements or find any bugs!

---

### Connect with me

Have questions or feedback? Reach out on LinkedIn or open an issue on GitHub!
