import React from "react";
import Accordion from "../components/Accordion";
import Container from "../components/Container";

const Panel3 = () => {
  const accordions = [
    {
      title: "Digital Strategy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae fugiat sapiente atque repellendus vitae.",
      tags: ["Creative Strategy", "Performance Creative Strategy"],
    },
    {
      title: "Creative Strategy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit amet consectetur adipisicing elit molestiae fugiat sapiente atque repellendus vitae.",
      tags: ["Creative Strategy", "Performance Creative Strategy"],
    },
    {
      title: "PPC Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque elit. Neque molestiae fugiat sapiente atque repellendus vitae.",
      tags: [
        "Google Search",
        "Google Shopping",
        "Google Display Network",
        "Discovery",
        "Performance Max",
        "Youtube",
        "Microsoft Ads",
      ],
    },
    {
      title: "Paid Social Advertising",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet consectetur adipisicing molestiae fugiat sapiente atque repellendus vitae.",
      tags: ["Facebook Ads", "Instagram Ads", "Pinterest Ads", "Tiktok Ads"],
    },
    {
      title: "Performance Creative",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae fugiat consectetur adipisicing elit. Neque molestiae fugiat sapiente atque repellendus vitae.",
      tags: ["Video Ads", "Static Ads", "User Generated Content"],
    },
  ];

  return (
    <Container customStyle={"my-44"}>
      <div className="mt-20" />
      {accordions.map(({ description, tags, title }, index) => (
        <Accordion
          key={index}
          i={index < 10 ? `0${index + 1}` : index + 1}
          title={title}
          description={description}
          tags={tags}
        />
      ))}
    </Container>
  );
};

export default Panel3;
