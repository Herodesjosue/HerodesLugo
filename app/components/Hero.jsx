"use client";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/images/laptop.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className=" mt-20">
          <h1 className="mb-2 w-auto text-7xl font-bold mb-5">
            Hi,<span className="animate-bounce ">👋</span> i'm Herodes
          </h1>
          <h4 className="mb-10 text-5xl">
            🧑‍💻Web{" "}
            <span className="bg-white text-neutral p-1 rounded">Developer</span>
          </h4>
          {/* <button className="btn btn-info text-lg text-white" onClick={()=>{
            router.push("#contact")
          }}>Contact 🔥</button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
