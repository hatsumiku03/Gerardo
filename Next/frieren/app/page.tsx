// import Image from "next/image";
import NavBar from "./elements/nav-bar";
import Post from "./elements/post";

export default function Home() {
  return (
    <>
      <NavBar />
        <div className="grid">
          <Post imageUrl="https://pics.filmaffinity.com/Sonic_3_La_pelaicula-516879074-large.jpg"/>
          <Post imageUrl=""/>
          <Post imageUrl=""/>
          <Post imageUrl=""/>
          <Post imageUrl=""/>
        </div>
    </>
  );
}
