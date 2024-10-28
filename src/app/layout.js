import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
<<<<<<< HEAD
import FooterComponent from "@/components/footer/FooterComponent";
import NavbarComponent from "@/components/navbar/NavbarComponent";
=======
import Navbar from "../components/navbar/NavbarComponent";
import Footer from "../components/footer/FooterComponent";
// import Header from "@/components/navbar/Header";
>>>>>>> 7f46447206d724507539315b9121d2b51b5dfa89

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "KIIT Alumni Network",
  description: "KIIT Alumni Network",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#101010] antialiased`}
      >
         <NavbarComponent />
        <NextUIProvider>
          {/* <Header/> */}
          <Navbar />
          {children}
          <Footer />
        </NextUIProvider>
        <FooterComponent />
      </body>
    </html>
  );
}