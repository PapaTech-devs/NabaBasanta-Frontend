/* eslint-disable */
import { useTranslation } from "react-i18next";

export const useFeats = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: t("Relax and comfort"),
      icon: "fas fa-couch",
      desc: t("Open air sitting"),
    },
    {
      id: 2,
      title: t("Delicious eating"),
      icon: "fas fa-utensils",
      desc: t("Inhouse dining and barbeque arrangement"),
    },
    {
      id: 3,
      title: t("Beautiful natural Ambience"),
      icon: "fas fa-mountain",
      desc: t("A couple friendly environment and very close to campus"),
    },
    {
      id: 4,
      title: t("Driver's accommodation"),
      icon: "fas fa-car",
      desc: t("Free pickup and drop facilities"),
    },
  ];
};
