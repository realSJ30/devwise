import React from "react";
import Container from "../components/Container";

const Panel1 = () => {
  return (
    <Container customStyle={"grid-flow-row-dense my-56"}>
      <h1 className="col-span-6 font-bold text-4xl sm:text-6xl ">Success for</h1>
      <h1 className="sm:col-start-2 col-span-6 font-bold text-4xl sm:text-6xl">
        ambitious brands
      </h1>
      <div className="col-span-6 grid grid-cols-4 gap-4">
        <p className="col-span-3 md:col-span-2 text-right font-roboto">What we do</p>
        <hr className="col-span-1 md:col-span-2 border self-top mt-3 border-orange" />
      </div>
    </Container>
  );
};

export default Panel1;
