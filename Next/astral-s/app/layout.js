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
          <div className="m-3 bg-slate-300 text-black w-fit p-1 rounded-md hover:bg-slate-400 hover:text-gray-900 transition-colors">
            <a href="/auth/login">Login</a>
          </div>
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}