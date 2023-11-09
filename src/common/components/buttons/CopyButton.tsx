import copy from "copy-to-clipboard";
import StandardButton from "./StandardButton";
import React from "react";

export default function CopyButton({
  children,
  textToCopy,
}: {
  children: React.ReactNode;
  textToCopy: string;
}) {
  const [copied, setCopied] = React.useState(false);
  return (
    <span
      onClick={() => {
        setCopied(true);
        copy(textToCopy);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      }}
    >
      <StandardButton>
        {!copied ? children : <span className="text-gray-500">Copied !</span>}
      </StandardButton>
    </span>
  );
}
