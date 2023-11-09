"use client";

import Section from "./Section";
import SubSection from "./SubSection";
import StandardButton from "../buttons/StandardButton";
import SubTitle from "../text/SubTitle";
import Avatar from "../img/Avatar";
import AvailableForWork from "../text/AvailableForWork";
import CopyButton from "../buttons/CopyButton";
import Title from "../text/Title";
import CustomLink from "../text/CustomLink";

export default function Footer() {
  return (
    <Section className="rounded-b-none mt-4">
      <Title className={`w-full mt-2 text-center`}>
        Let's <span className="text-pink-500">work</span>{" "}
        <span className="text-blue-400">together</span>!
      </Title>
      <p className="text-gray-700 text-center mt-1 text-sm">
        Creating websites and application to fit your business
      </p>
      <div className="flex flex-row justify-center my-6">
        <Avatar className="w-14 h-14" available></Avatar>
        <div className="ml-4">
          <CustomLink href="/about">
            <p className="font-medium">Pierre Faber.</p>
          </CustomLink>
          <AvailableForWork></AvailableForWork>
        </div>
      </div>
      <div className="flex flex-row space-x-2 justify-center font-medium">
        <StandardButton reverseColor>Contact me!</StandardButton>
        <CustomLink href={"/assets/Pierre FABER - Resume.pdf"}>
          <StandardButton>Download CV</StandardButton>
        </CustomLink>
        <CopyButton textToCopy="faberpierre78@gmail.com">Copy Email</CopyButton>
      </div>
      <SubSection
        className="mt-8"
        classNameChildren="w-full flex flex-row justify-between items-center"
      >
        <SubTitle>Follow me!</SubTitle>
        <div className="flex flex-wrap flex-wrap justify-end space-x-2 text-sm">
          <CustomLink href={"https://www.linkedin.com/in/pierrefaber/"}>
            LinkedIn
          </CustomLink>
          <CustomLink href={"https://www.github.com/LeMoineau/"}>
            github
          </CustomLink>
          <CustomLink href={"https://www.linkedin.com/in/pierrefaber/"}>
            twitter
          </CustomLink>
          <CustomLink href={"https://www.linkedin.com/in/pierrefaber/"}>
            dribbble
          </CustomLink>
        </div>
      </SubSection>
      <SubSection
        className="mt-4"
        classNameChildren="w-full flex flex-col items-center"
      >
        <p>
          2023-2024 ©{" "}
          <CustomLink href={"/"} className="font-medium">
            Pierre Faber
          </CustomLink>
          .
        </p>
        <p className="text-center">
          Made with{" "}
          <CustomLink
            href={"https://nextjs.org/docs/"}
            className="text-orange-600 font-medium underline"
          >
            NextJS
          </CustomLink>
          ,{" "}
          <CustomLink
            href={"https://tailwindcss.com/docs/"}
            className="text-orange-600 font-medium underline"
          >
            Tailwindcss
          </CustomLink>
        </p>
      </SubSection>
    </Section>
  );
}
