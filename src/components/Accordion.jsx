import React, { useState } from "react";
import ArrowIcon from "./ArrowIcon";
import CircleIcon from "./CircleIcon";
import Container from "./Container";

const Accordion = ({ i, title, description, tags }) => {
  const [chosen, setChosen] = useState(false);
  return (
    <Container
      onClick={() => setChosen(!chosen)}
      customStyle={
        !chosen
          ? "col-span-4 md:col-span-6 lg:col-span-12 border-b border-gray-300 py-8 cursor-pointer px-0 group hover:border-orange transition-all ease-in-out duration-200"
          : "col-span-4 md:col-span-6 lg:col-span-12 border-b py-8 cursor-pointer px-0 group border-orange transition-all ease-in-out duration-200"
      }
    >
      <div
        className={
          !chosen
            ? "col-span-4 md:col-span-6 lg:col-span-12 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 md:group-hover:px-12 transition-all ease-in-out duration-200"
            : "col-span-4 md:col-span-6 lg:col-span-12 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 px-0 transition-all ease-in-out duration-200"
        }
      >
        <p className="font-roboto text-orange text-sm">{i}</p>
        <h2 className="col-span-3 xs:col-span-2 md:col-span-4 lg:col-span-9 font-bold text-3xl sm:text-4xl ">
          {title}
        </h2>
        <button
          className={
            !chosen
              ? "font-roboto text-orange place-self-end lg:col-span-2 text-right hidden xs:flex items-center space-x-4 bg-transparent border border-orange rounded-full py-2 px-3 text-xs justify-center group-hover:bg-dg-green group-hover:border-dg-green group-hover:text-white group transition-all ease-linear"
              : "font-roboto text-white place-self-end lg:col-span-2 text-right hidden xs:flex items-center space-x-4 bg-orange border border-orange rounded-full py-2 px-3 text-xs justify-center group-hover:bg-dg-green group-hover:border-dg-green group transition-all ease-linear"
          }
        >
          <p className="text-sm font-medium">View</p>
          <CircleIcon
            additionalStyle={
              !chosen
                ? "text-orange block group-hover:hidden"
                : "text-white block group-hover:hidden"
            }
          />
          <ArrowIcon additionalStyle={"hidden group-hover:block "} />
        </button>
      </div>
      <div
        className={
          !chosen
            ? "col-span-4 h-[0px] md:col-span-6 lg:col-span-12 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 transition-all ease-in-out duration-200"
            : "col-span-4 h-[300px] sm:h-[220px] lg:h-[120px] md:col-span-6 lg:col-span-12 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 transition-all ease-in-out duration-200"
        }
      >
        <div
          className={
            !chosen
              ? "opacity-0 hidden md:col-start-2 lg:col-start-3 col-span-4 md:col-span-5 lg:col-span-9 mx-8  md:mx-0 text-justify sm:text-left font-roboto text-base my-8 transition-all ease-in-out duration-200"
              : "opacity-100 md:col-start-2 lg:col-start-3 col-span-4 md:col-span-5 lg:col-span-9 mx-8  md:mx-0 text-justify sm:text-left font-roboto text-base my-8 transition-all ease-in-out duration-200"
          }
        >
          {description}
        </div>
        <ul
          className={
            !chosen
              ? "opacity-0 md:col-start-2 lg:col-start-3 col-span-4 sm:divide-x divide-slate-400 divi md:col-span-5 lg:col-span-9 mx-8 sm:mx-auto md:mx-0 font-roboto flex-col sm:flex-row flex sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs transition-all ease-in-out duration-200"
              : "opacity-100 md:col-start-2 lg:col-start-3 col-span-4 sm:divide-x divide-slate-400 divi md:col-span-5 lg:col-span-9 mx-8 sm:mx-auto md:mx-0 font-roboto flex-col sm:flex-row flex sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs transition-all ease-in-out duration-200"
          }
        >
          {tags.map((tag, index) => (
            <li key={index} className="text-orange sm:px-4 first:pl-0 last:pr-0">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Accordion;
