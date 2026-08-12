import { Archivo, Space_Mono } from "next/font/google";
import { site } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import UglyToggle from "@/components/UglyToggle";
import AmbientGlow from "@/components/AmbientGlow";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: site.metaTitle,
    template: `%s · ${site.name}`,
  },
  description: site.metaDescription,
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`,
          }}
        />
      </head>
      <body>
        <AmbientGlow />
        <div className="grain" aria-hidden="true" />
        <ScrollProgress />
        <div className="ugly-marquee" aria-hidden="true">
          <span>
            <b>AMAZING DESIGN ✦ WOW ✦ SO PROFESSIONAL ✦ VERY STRATEGY ✦ MUCH AWARD ✦ </b>
            <b>AMAZING DESIGN ✦ WOW ✦ SO PROFESSIONAL ✦ VERY STRATEGY ✦ MUCH AWARD ✦ </b>
          </span>
        </div>
        <div className="ugly-marquee top" aria-hidden="true">
          <span>
            <b>HIRE ME PLEASE ✦ CALL NOW ✦ BEST PRICES ✦ LIMITED OFFER ✦ WOW ✦ </b>
            <b>HIRE ME PLEASE ✦ CALL NOW ✦ BEST PRICES ✦ LIMITED OFFER ✦ WOW ✦ </b>
          </span>
        </div>
        <div className="ugly-badge" aria-hidden="true">
          ★ BEST WEBSITE ★
        </div>
        <Navbar />
        {children}
        <Footer />
        <ThemeToggle />
        <UglyToggle />
      </body>
    </html>
  );
}
