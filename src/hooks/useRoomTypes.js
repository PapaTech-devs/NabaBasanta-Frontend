/*eslint-disable*/
import i18n from "i18next";

import centraleBed1 from "../assets/images/2bedTable.jpeg";
import centraleBed3 from "../assets/images/2bedwithAc.jpeg";
import centraleDetail from "../assets/images/kitchen.jpeg";
import centraleLarge from "../assets/images/light2.jpeg";
import direttoreBathroom from "../assets/images/bathroom.jpeg";
import direttoreDetail1 from "../assets/images/sittingRoomFull.jpeg";
import direttoreDetail2 from "../assets/images/interior2.jpeg";
import direttoreDoubleBed from "../assets/images/4bed.jpeg";
import latomammaBathroom from "../assets/images/bathroom.jpeg";
import latomammaBed from "../assets/images/2bed.jpeg";
import latomammaDetail2 from "../assets/images/dining1.jpeg";
import latomammaDetail3 from "../assets/images/interior.jpeg";
// import latopiazzaBathroom from "../assets/images/room-latopiazza-bathroom.jpeg";
// import latopiazzaBed from "../assets/images/room-latopiazza-bed-4.jpeg";
// import latopiazzaDetail from "../assets/images/room-latopiazza-detail-3.jpeg";
// import latopiazzaLarge from "../assets/images/room-latopiazza-large-1.jpeg";
import { useRooms } from "./useRooms";

export const useRoomTypes = () => {
  const { rooms } = useRooms();
  const roomTypes = [
    // direttore ( 4-bed )
    {
      id: 1,
      room: rooms[0],
      cardVertical: {
        caption: i18n.t("Bathroom"),
        icon: "fas fa-bath",
        muted: i18n.t("Clean"),
        img: direttoreBathroom,
      },
      cardHorizontal: {
        caption: i18n.t("4 beds"),
        icon: "fas fa-bed",
        muted: i18n.t("Large and comfortable"),
        img: direttoreDoubleBed,
      },
      cardSquare1: {
        caption: i18n.t("Relax zone"),
        icon: "fas fa-tv",
        muted: i18n.t("With television"),
        img: direttoreDetail1,
      },
      cardSquare2: {
        caption: i18n.t("Fine details"),
        icon: "fas fa-lightbulb",
        muted: i18n.t("Elegance and class"),
        img: direttoreDetail2,
      },
    },

    // lato piazza
    // {
    //   id: 2,
    //   room: rooms[1],
    //   cardVertical: {
    //     caption: i18n.t("Bathroom"),
    //     icon: "fas fa-sink",
    //     muted: i18n.t("Rustic look"),
    //     img: latopiazzaBathroom,
    //   },
    //   cardHorizontal: {
    //     caption: i18n.t("Living room"),
    //     icon: "fas fa-couch",
    //     muted: i18n.t("Relax and comfort"),
    //     img: latopiazzaLarge,
    //   },
    //   cardSquare1: {
    //     caption: i18n.t("Dining room"),
    //     icon: "fas fa-utensils",
    //     muted: i18n.t("Large and modern"),
    //     img: latopiazzaDetail,
    //   },
    //   cardSquare2: {
    //     caption: i18n.t("Room"),
    //     icon: "fas fa-bed",
    //     muted: i18n.t("With an exposed bath"),
    //     img: latopiazzaBed,
    //   },
    // },

    // centrale ( 2-bed )
    {
      id: 2,
      room: rooms[1],
      cardVertical: {
        caption: i18n.t("Atmosphere"),
        icon: "fa fas-couch",
        muted: i18n.t("Calm and soothing"),
        img: centraleLarge,
      },
      cardHorizontal: {
        caption: i18n.t("Kitchen"),
        icon: "fas fa-utensils",
        muted: i18n.t("Large and well equipped"),
        img: centraleDetail,
      },
      cardSquare1: {
        caption: i18n.t("Room"),
        icon: "fas fa-bed",
        muted: i18n.t("With Ac"),
        img: centraleBed3,
      },
      cardSquare2: {
        caption: i18n.t("Room"),
        icon: "fas fa-bed",
        muted: i18n.t("With Ac"),
        img: centraleBed1,
      },
    },

    // centrale (delux double bed)
    {
      id: 3,
      room: rooms[2],
      cardVertical: {
        caption: i18n.t("Fine details"),
        icon: "fas fa-lightbulb",
        muted: i18n.t("Elegance and class"),
        img: latomammaDetail3,
      },
      cardHorizontal: {
        caption: i18n.t("Dining room"),
        icon: "fas fa-utensils",
        muted: i18n.t("Nice and clean"),
        img: latomammaDetail2,
      },
      cardSquare1: {
        caption: i18n.t("Double bed"),
        icon: "fas fa-bed",
        muted: i18n.t("Large and comfortable"),
        img: latomammaBed,
      },
      cardSquare2: {
        caption: i18n.t("Bathroom"),
        icon: "fas fa-bath",
        muted: i18n.t("With an exposed bath"),
        img: latomammaBathroom,
      },
    },
  ];

  return { roomTypes };
};
