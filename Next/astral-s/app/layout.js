import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import { auth0 } from "./lib/auth0";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Joselito - Socialapp",
  description: "Aplicación social de Joselito",
};

export default async function RootLayout({ children }) {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <html>
        <body>
          <a href="/auth/login">Log in</a>
        </body>
      </html>
    )
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <h1>{session.user.name}</h1>
        <a href="/auth/logout">Log out</a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}