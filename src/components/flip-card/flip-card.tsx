import React from "react";
import "./flip-card.scss";
export interface IFlipCardFull {
  Front: any;
  Back: any;
  className?: string;
  height: number;
  width: number;
}
export const FlipCardFull = (props: IFlipCardFull) => {
  return (
    <div
      style={{ height: props.height ?? 300, width: props.width ?? 200 }}
      className={`flip-card  ${props.className}`}
    >
      <div className="flip-card-inner rounded-pill ">
        <div className="flip-card-front w-100 h-100">{props.Front}</div>
        <div className="flip-card-backw-100 h-100">{props.Back}</div>
      </div>
    </div>
  );
};
export const FlipCard = (props) => {
  console.log(props);
  return (
    <div
      className="flip-card"
      style={{ height: props.height ?? 300, width: props.width ?? 200 }}
    >
      <div className="flip-card-inner w-100 h-100">{props.children}</div>
    </div>
  );
};

export const FlipCardFront = (props) => (
  <div className="flip-card-front w-100 h-100">{props.children}</div>
);

export const FlipCardBack = (props) => (
  <div className="flip-card-back w-100 h-100">{props.children}</div>
);
