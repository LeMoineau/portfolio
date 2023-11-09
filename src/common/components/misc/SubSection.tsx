import React from "react";
import SubTitle from "../text/SubTitle";

export default function SubSection({
  children,
  className,
  classNameChildren,
  title,
  actions,
}: {
  children: React.ReactNode;
  className?: string;
  classNameChildren?: string;
  title?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div
      className={`${className} w-full p-4 border border-gray-100 bg-gray-50 rounded-lg`}
    >
      <div className="w-full flex flex-row justify-between md:justify-start md:space-x-4 items-center">
        <SubTitle>{title}</SubTitle>
        <div>{actions}</div>
      </div>
      <div className={classNameChildren}>{children}</div>
    </div>
  );
}
