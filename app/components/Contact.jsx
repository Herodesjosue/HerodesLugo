"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const Contact = () => {
  const [informacion, setInformacion] = useState({
    email: "",
    description: "",
  });
  const [validator, setValidator] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInformacion({ ...informacion, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setInformacion({ ...informacion, email: "", description: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/herodeslugo@gmail.com",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(informacion),
        }
      );
      const data = await response.json();
      if (data) setValidator(true);
      setTimeout(() => {
        setValidator(false);
        handleClear();
      }, 3000);
      // console.log(data);
    } catch (error) {
      console.log(error);
      if (error) setError(true);
      setTimeout(() => {
        setError(false);
        handleClear();
      }, 3000);
    }
  };
  // useEffect(() => {
  //   console.log(informacion);
  // }, [informacion]);
  return (
    <div className="hero min-h-screen bg-base-200" id="contact">
      <div className="flex flex-col lg:flex-row gap-40 items-center">
        <div className="hidden lg:visible lg:block">
          
          <Image
            src={"/images/mensaje.png"}
            alt="email"
            width={320}
            height={320}
          ></Image>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl text-center mt-5 font-bold">Contact me</h1>

          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                value={informacion.email}
                onChange={handleChange}
                required
                // autoFocus
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="input input-bordered h-32 p-2"
                name="description"
                id=""
                cols="30"
                rows="50"
                value={informacion.description}
                onChange={handleChange}
                required
                placeholder="Write Something"
              ></textarea>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  {/* Forgot password? */}
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </div>
          </form>
          {validator ? (
            <p
              className="text-white text-center
             bg-green-600
             rounded
             rounded-full
             p-2
             w-80
             mx-auto
             mb-5
             font-bold
               text-xl"
            >
              email sent
            </p>
          ) : null}
          {error ? (
            <p
              className="text-white text-center
            bg-red-800
            rounded
            rounded-full
            p-2
            w-80
            mx-auto
            mb-5
            font-bold
              text-xl"
            >
              was error
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Contact;
