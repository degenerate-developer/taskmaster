// import { Manrope } from "next/font/google";
// import { Providers } from "@/components/providers";
// import backgroundTexture from "@/public/background.png";
// import { Toaster } from "@taskmaster/ui/components/sonner";
// import localFont from "next/font/local";
// import "@taskmaster/ui/globals.css";
// import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { metadata } from "./metadata";
// // import { ReactScan } from "@/components/react-scan";

// export { metadata };

// const fontSans = Manrope({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// const fontHeadline = localFont({
//   src: "../public/fonts/tiempos-headline-light.woff2",
//   style: "normal",
//   variable: "--font-mono",
//   display: "swap",
//   fallback: ["Georgia", "Times New Roman", "serif"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${fontSans.variable} ${fontHeadline.variable} font-sans antialiased`}
//         style={{
//           backgroundImage: `url(${backgroundTexture.src})`,
//           backgroundRepeat: "repeat",
//         }}
//       >
//         {/* <ReactScan /> */}
//         <Providers>{children}</Providers>
//         <Toaster />
//         <Analytics />
//         <SpeedInsights />
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
