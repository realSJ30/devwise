import React from "react";
import Container from "../components/Container";

const Panel2 = () => {
  return (
    <Container>
      <div className="col-span-4 md:col-span-3 lg:col-span-6 self-center font-roboto">
        <h3 className="text-sm md:text-base leading-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          dolore!
        </h3>
        <p className="text-xs md:text-sm mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos
          doloribus maiores inventore voluptatum voluptate? Atque similique
          nulla ratione perferendis?
        </p>
      </div>
      <div className="col-span-4 md:col-span-5 lg:col-span-6 self-center py-8 md:pl-8 aspect-square">
        <div className="bg-paris w-full h-full bg-cover bg-fixed bg-no-repeat bg-right-bottom" />
      </div>
      <div className="col-span-4 md:col-span-8 lg:col-span-12 self-center py-8 aspect-square sm:aspect-video">
        <div className="bg-bridge w-full h-full bg-cover bg-fixed bg-no-repeat bg-center sm:bg-right-bottom" />
      </div>
    </Container>
  );
};

export default Panel2;
