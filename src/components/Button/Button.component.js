import React from "react";
import { Btn } from "./Button.styles";

export const Button = ({ imp, text, link }) => {
  return (
    <Btn imp={imp}>
      <a href={link}>{text}</a>
    </Btn>
  );
};
