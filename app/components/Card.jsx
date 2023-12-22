import Image from "next/image";
import { BsGithub } from "react-icons/bs";
const Card = ({ src, title, description }) => {
  return (
    <div className="mt-5 mx-auto lg:mt-0 card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          className="h-48"
          src={src}
          width={420}
          height={320}
          alt="Images"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info">
            {" "}
            <BsGithub className="text-2xl" />
            Go to Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
