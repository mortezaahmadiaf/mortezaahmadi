import React, { CSSProperties } from "react";
export interface IROW {
  children?: any;
  className?: string;
  style?: CSSProperties;
  align?: "start" | "end" | "center";
  alignType?: "items" | "self";
  justify?: "start" | "end" | "center";
}

export const Row = (props?: IROW) => (
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
