import { useTranslation } from "react-i18next";
import React from "react";
export interface ITranslate {
  key: string;
}
export const Translate = (props: ITranslate) => {
  const { t } = useTranslation();
  return <span>{t(props.key)}</span>;
};
export const translate = (key: string, props?: any) => {
  const { t } = useTranslation();
  return t(key);
};
