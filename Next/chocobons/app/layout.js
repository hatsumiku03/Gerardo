import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from '@/app/ui/nav-bar'
import { auth0 } from "./lib/auth0";
import Landing from "./ui/landing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chocobons",
  description: "Una red social estilo chocobo 😎",
};

export default async function RootLayout({ children }) {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col gap-4 p-8`}>
        <Landing />
        <p><a href="/auth/login" className="rounded bg-teal-800 p-2">Log in</a></p>
      </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-amber-200 to-teal-400 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-950 {`${geistSans.variable} ${geistMono.variable} antialiased flex`}">
        <NavBar></NavBar>
        <div className="p-8 grow flex justify-center align-center">
          {children}
        </div>
      </body>
    </html>
  );
}
