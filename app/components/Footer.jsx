"use client";
import {
  BsHCircleFill,
  BsInstagram,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer>
      <div className="container mx-auto m-20" id="about-me">
        <div className="p-3 lg:p-0">
          <div className="mb-5 p-3 lg:p-0">
            <h1 className="text-5xl">About me</h1>
            <p className="mt-2">
              Hi¡ I'm from Venezuela and i'm 22 years old, everyday i'm learning
              something new, i would like to travel around of the world but
              well, will be for another day.
            </p>
          </div>
          <div className="p-3 lg:p-0">
            <h1 className="text-5xl">Knowledge</h1>
            <ol className="mt-2  lg:p-0 flex flex-wrap gap-3 lg:flex lg:gap-3">
              {/* <span className=""> */}
              <li>React</li>
              <li>Javascript</li>
              <li>NodeJs</li>
              <li>Git</li>
              <li>NextJs</li>
              <li>Bootstrap</li>
              <li>Sql Server</li>
              <li>Supabase</li>
              <li>Tailwind CSS</li>
              {/* </span> */}
            </ol>
          </div>
        </div>
      </div>

      <div className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <BsHCircleFill className="text-2xl" />
          <p>Copyright © 2023 HerodesJosue</p>
        </aside>
        <nav className="grid-flow-col gap-6 md:place-self-center md:justify-self-end">
          <BsInstagram
            className="text-3xl"
            onClick={() => {
              router.push("https://www.instagram.com/josue.797/");
            }}
          />
          <BsTwitter
            className="text-3xl"
            onClick={() => {
              router.push("https://twitter.com/HerodesJosue");
            }}
          />
          <BsGithub
            className="text-3xl"
            onClick={() => {
              router.push("https://github.com/Herodesjosue");
            }}
          />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
