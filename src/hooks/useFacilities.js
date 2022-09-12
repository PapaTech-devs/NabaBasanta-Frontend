/* eslint-disable */
import { useTranslation } from "react-i18next";

export const useFacilities = () => {
  const { t } = useTranslation();

  return [
    { id: 1, title: t("Pet friendly"), icon: "fas fa-paw" },
    { id: 2, title: t("Large parking"), icon: "fas fa-car" },
    { id: 3, title: t("Breakfast"), icon: "fas fa-coffee" },
    { id: 4, title: t("Kitchen"), icon: "fas fa-utensils" },
    { id: 5, title: t("Open air sitting"), icon: "fas fa-book-reader" },
  ];
};
