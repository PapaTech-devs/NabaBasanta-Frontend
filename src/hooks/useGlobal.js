/* eslint-disable  */
import { useTranslation } from "react-i18next";

import logo from "../assets/images/logo.png";

export const useGlobal = () => {
  const { t } = useTranslation();

  return {
    defaultSeo: {
      metaTitle: t("Naba Basanta"),
      metaDescription: t("naba_basanta"),
    },

    contacts: {
      mobile1: { displayValue: "+91 9831012225", href: "tel:+919831012225" },
      mobile2: { displayValue: "+91 6289003860", href: "tel:+916289003860" },
      whatsapp: {
        displayValue: "+91 9674722201",
        href: "https://wa.me/+919674722201",
      },
      email: {
        displayValue: "bdey1959@gmail.com",
        href: "mailto:bdey1959@gmail.com",
      },
      address: {
        displayValue: "Prantik ( near SayarBithi Park ), Birbhum, West Bengal",
        href: "",
      },
    },

    fiscal: {
      businessName: "Naba Basanta",
      // vatNumber: "",
      legalEmail: "bdey1959@gmail.com",
      legalAddress: "Prantik ( near SayarBithi Park ), Birbhum, West Bengal",
    },

    logo,
  };
};
