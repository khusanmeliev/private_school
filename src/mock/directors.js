import { MdEmail } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

export const directors = [
  {
    id: 1,
    img: "https://profimaktab.uz/wp-content/uploads/2021/08/274A1614-scaled.jpg",
    settings: <GrUserSettings />,
    name: "Hurshid Shavkatbekovich",
    email_icon: <MdEmail />,
    email: "direktor@profiedu.uz",
    phone_icon: <FaPhone />,
    phone: "+998YYXXXXXXX",
    address_icon: <FaMapMarkerAlt />,
    address: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    facebook_icon: <FaFacebookF />,
    telegram_icon: <FaTelegramPlane />,
    instagram_icon: <FaInstagram />,
  },
  {
    id: 2,
    img: "https://profimaktab.uz/wp-content/uploads/2021/08/274A1614-scaled.jpg",
    settings: <GrUserSettings />,
    name: "Zemfira Talgatovna",
    email_icon: <MdEmail />,
    email: "zemfiratalgatovna@profiedu.uz",
    phone_icon: <FaPhone />,
    phone: "+998YYXXXXXXX",
    address_icon: <FaMapMarkerAlt />,
    address:
      "Olmazor tumani, Universitet ko’chasi 5 uy; Mo’ljal: O’zbekiston Milliy Universiteti, Innovatsiya vazirligi, Beruniy metrosi.",
    facebook_icon: <FaFacebookF />,
    telegram_icon: <FaTelegramPlane />,
    instagram_icon: <FaInstagram />,
  },
];
