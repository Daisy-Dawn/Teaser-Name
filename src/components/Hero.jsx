import React, {useEffect} from "react";
import { shirt } from "../assets";
import Button from "./Button";
import Typewriter from 'typewriter-effect/dist/core';

const Hero = () => {
  useEffect(() => {
    const app = document.getElementById("app");
    const typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(2000)
      .typeString("<span style={{background: linear-gradient(90deg, #FFF 45%, #474747 100%), backgroundClip: text}}>Transform your workflow with</span>")
      .pauseFor(300)
      .deleteChars(4)
      .typeString("with cutting-edge solutions from ")
      .typeString("Teaser Name")
      .pauseFor(1000)
      .start();
  }, []);
  return (
    <section
      id="home"
      className="relative xl:px-32 lg:px-15 px-3 xl:pt-12 lg:pt-8 pt-3 md:pt-6 font-inter flex flex-col items-center justify-center"
    >
      {/* <h2 id="app" className="mx-12 px-20 font-bold text-center glow text-[50px] mb-0 leading-[50px] ">
        Transform your workflow with cutting-edge solutions from Teaser Name.
      </h2> */}
      <h2 className="xl:mx-12 lg:mx-8 mx-4 xl:px-20 lg:px-8 leading-[30px] md:leading-[35px] xl:leading-[50px] lg:leading-[40px]  px-5 font-bold text-center glow text-[25px] md:text-[35px] xl:text-[50px] lg:text[40px] mb-0 ">
        Transform your workflow with cutting-edge solutions from Teaser Name.
      </h2>

      <p className="text-center lg:text-[16px] text-[14px] mt-5 leading-[18px] text-gray-200 xl:mx-20 lg:mx-10 mx-5 xl:px-[200px] lg:px-[70px] px-3 font-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        sapiente suscipit amet optio quia fuga rerum ex cupiditate maiores,
        perferendis blanditiis, quam a.
      </p>

      <img
        className="lg:w-[700px] w-full h-full md:w-[450px] md:h-[400px] lg:h-[600px] "
        src={shirt}
        alt="website shirt"
      />
      <div className="flex absolute md:top-[250px] lg:top-[320px] xl:top-[360px] min-[300px]:top-[380px] min-[370px]:top-[320px] gap-5 ">
        <Button text="Get Started" />
        <Button text="Join Us" />
      </div>
    </section>
  );
};

export default Hero;
