import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Herodes Lugo",
  description: "Made by HerodesJosue",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
