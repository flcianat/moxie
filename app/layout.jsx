import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Moxie",
  description: "Project Tracker App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-custom-gradient h-screen`}>
        <Navigation />
        <div className="px-8 py-4 ">{children}</div>
      </body>
    </html>
  );
}
