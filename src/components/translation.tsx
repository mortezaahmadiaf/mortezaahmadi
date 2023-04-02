import React from "react";
import { useTranslation } from "react-i18next";

export const translate = (key: string) => {
  const { t } = useTranslation();
  return t(key);
};
interface ITranslate {
  id: string;
}
export const Translate = (props: ITranslate) => {
  const { t } = useTranslation();
  return <span>{t(props.id)}</span>;
};
