import React, { CSSProperties } from "react";
export interface ICol {
  children?: any;
  col?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  className?: string;
  style?: CSSProperties;
}

export const Col = (props?: ICol) => (
  <div
    style={props.style}
    className={` ${props.className ? props.className : ""}  ${
      props.col ? `col-${props.col}` : ""
    }
 ${props.sm ? `col-${props.sm}` : ""}${props.md ? `col-${props.md}` : ""}${
      props.lg ? `col-${props.lg}` : ""
    }${props.xl ? `col-${props.xl}` : ""}${
      props.xxl ? `col-${props.xxl}` : ""
    }`}
  >
    {props.children}
  </div>
);
