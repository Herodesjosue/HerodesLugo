"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const linkRoutes = [
    // {
    //   // name: "HOME",
    //   // route: "/",
    // },
    {
      name: "PROJECTS",
      route: "#projects",
    },
   
    {
      name: "CONTACT",
      route: "#contact",
    },
    {
      name: "ABOUT ME",
      route: "#about-me",
    },
   
  ];

  const pathName = usePathname();
  console.log(pathName);
  return (
    <div
      className="flex justify-center gap-3 absolute
    top-0 left-0 right-0 bottom-0 p-10 lg:text-xl"
    >
      {/* <button className="btn btn-ghost text-xl">HJLG</button> */}
      {linkRoutes.map(({ name, route }) => {
        return (
          <div key={route}>
            <nav className="">
              <Link
                className={
                  " text-white rounded-full hover:text-neutral p-3 hover:bg-white hover:rounded-full hover:p-3 me-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                }
                href={route}
              >
                {name}
              </Link>
            </nav>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
