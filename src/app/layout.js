import { Inter } from "next/font/google";
import Footer from './components/footer/footer'
import Navb from './components/nav/Nav'
import './globals.css'
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navb />
        {children}
        <Footer />
      </body>
    </html>
  );
}

