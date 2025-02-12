import Image from "next/image";
import ProfileClient from "./ui/profileclient";

export default function Home() {
  return (
    <div>
      <ProfileClient />
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>

    </div>
  );
}
