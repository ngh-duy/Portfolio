import React from "react";
import "./experience.scss";
import reduxIcon from "../../assets/redux.svg";
import reactIcon from "../../assets/react.svg";
import javaScriptIcon from "../../assets/javascript.svg";
import scssIcon from "../../assets/scss.png";
import tailwindcssIcon from "../../assets/tailwindcss.svg";
import html5Icon from "../../assets/html.svg";
import cssIcon from "../../assets/css.png";
import Item from "../Item";
export default function Experience() {
  const rainIcons = [
    reactIcon,
    reduxIcon,
    javaScriptIcon,
    scssIcon,
    tailwindcssIcon,
    html5Icon,
    cssIcon,
  ];

  return (
    <>
      <div className="skill grid grid-cols-3 gap-4 transform -translate-y-16">
        <div className=" card relative overflow-hidden h-100  rounded-lg">
          <div className="bg-[#1A2A80] h-24 absolute bottom-0 z-10 left-0 right-0 card1 flex justify-center items-center">
            <span>LIBRARY</span>
          </div>
          <div className="h-58 mx-5 grid grid-cols-3 absolute z-0 left-4 right-4 rounded-3xl card2">
            {/* Hiệu ứng mưa */}
            <Item icon={reduxIcon} />
            <Item icon={scssIcon} />
            <Item icon={tailwindcssIcon} />
          </div>
            <div className="card3 h-58 mx-5 transform translate-y-18 absolute -z-10 inset-0 rounded-3xl overflow-hidden group-hover:hidden">
            {Array.from({ length: 20 }).map((_, i) => {
              const icon =
                rainIcons[Math.floor(Math.random() * rainIcons.length)];
              const left = Math.random() * 100;
              const duration = 3 + Math.random() * 2;
              const delay = Math.random() * 3;

              return (
                <img
                  key={i}
                  src={icon}
                  alt="rain-icon"
                  className="w-6 h-6 absolute"
                  style={{
                    left: `${left}%`,
                    animation: `fallIcon ${duration}s linear ${delay}s infinite`,
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className=" card relative overflow-hidden h-100  rounded-lg">
          <div className="bg-[#3B38A0] h-24 absolute bottom-0 z-10 left-0 right-0 card1 flex justify-center items-center">
            <span className="uppercase">framework</span>
          </div>
          <div className=" h-58 mx-5  grid grid-cols-3 absolute z-0 left-4 right-4 rounded-3xl card2">
            {/* <div className="rain">
              {Array.from({ length: 30 }).map((_, i) => (
                <div className="drop" key={i}></div>
              ))}
            </div> */}
            <Item icon={reactIcon} />
          </div>
            <div className="card3 h-58  transform translate-y-18 absolute -z-10 inset-0 rounded-3xl overflow-hidden group-hover:hidden">
            {Array.from({ length: 20 }).map((_, i) => {
              const icon =
                rainIcons[Math.floor(Math.random() * rainIcons.length)];
              const left = Math.random() * 100;
              const duration = 3 + Math.random() * 2;
              const delay = Math.random() * 3;

              return (
                <img
                  key={i}
                  src={icon}
                  alt="rain-icon"
                  className="w-6 h-6 absolute"
                  style={{
                    left: `${left}%`,
                    animation: `fallIcon ${duration}s linear ${delay}s infinite`,
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className=" card relative overflow-hidden h-100  rounded-lg">
          <div className="bg-[#7A85C1] h-24 absolute bottom-0 z-10 left-0 right-0 card1 flex justify-center items-center">
            <span>LANGUAGE</span>
          </div>
          <div className=" h-58 mx-5  grid grid-cols-3 absolute z-0 left-4 right-4 rounded-3xl card2">
            <Item icon={javaScriptIcon} />
            <Item icon={html5Icon} />
            <Item icon={cssIcon} />
          </div>
          <div className="card3 h-58 mx-5 transform translate-y-18 absolute -z-10 inset-0 rounded-3xl overflow-hidden group-hover:hidden">
            {Array.from({ length: 20 }).map((_, i) => {
              const icon =
                rainIcons[Math.floor(Math.random() * rainIcons.length)];
              const left = Math.random() * 100;
              const duration = 3 + Math.random() * 2;
              const delay = Math.random() * 3;

              return (
                <img
                  key={i}
                  src={icon}
                  alt="rain-icon"
                  className="w-6 h-6 absolute"
                  style={{
                    left: `${left}%`,
                    animation: `fallIcon ${duration}s linear ${delay}s infinite`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
