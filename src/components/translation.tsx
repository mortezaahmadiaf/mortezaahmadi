import React from "react";
import { useTranslation } from "react-i18next";

export const translate = (key: string, param?: object) => {
  const { t } = useTranslation();
  return t(key, param);
};
interface ITranslate {
  id: string;
  param?: object;
}
export const Translate = (props: ITranslate) => {
  const { t } = useTranslation();
  return <span>{t(props.id, props.param)}</span>;
};
