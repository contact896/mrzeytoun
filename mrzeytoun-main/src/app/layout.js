import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import AOSInitializer from "@/Components/AOSInitializer/AOSInitializer";

const outFit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const varsityTeam = localFont({
  src: "./VarsityTeam-Bold.otf",
  weight: "400",
  variable: "--varsity-team",
});

export const metadata = {
  title: "ZEYTOUN",
  description: "MR ZEYTOUN HIGH PERFORMANCE MATTE CLAY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outFit.variable} ${varsityTeam.variable} antialiased`}
      >
        <AOSInitializer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
