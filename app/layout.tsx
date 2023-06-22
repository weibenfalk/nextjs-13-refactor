import "@/styles/globals.css";
import ReactQueryWrapper from "./ReactQueryWrapper";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={raleway.variable}>
    <body>
      <ReactQueryWrapper>{children}</ReactQueryWrapper>
    </body>
  </html>
);

export default RootLayout;
