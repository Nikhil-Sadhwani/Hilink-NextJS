import Image from "next/image";
import React from "react";

type Props = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

export default function Button(props: Props) {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${props.variant}`}
      type={props.type}
    >
      {props.icon && (
        <Image src={props.icon} alt={props.title} width={24} height={24} />
      )}
      <label className="bold-16 whitespace-nowrap">{props.title}</label>
    </button>
  );
}
