import React, { CSSProperties } from "react";
export interface ICol {
  children?: any;
  className?: string;
  style?: CSSProperties;
  align: "start" | "end" | "center";
  alignType: "items" | "self";
  justify: "start" | "end" | "center";
}

export const Col = (props?: ICol) => (
  <div
    style={props.style}
    className={`row  ${props.className ? props.className : ""} ${
      props.align ? `align-${props.alignType ?? "items"}-${props.align}` : ""
    }
    ${props.justify ? `justify-content-${props.justify}` : ""}
    
    `}
  >
    {props.children}
  </div>
);
