//logo Import

// icon Imports
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

// photo imports of tyre
import mrfTyres from "../assets/tyresCompany/mrfTryes.webp";
import ceatTyres from "../assets/tyresCompany/CEAT-tyres-logo.webp";
import YokoHamaTyres from "../assets/tyresCompany/yokohama-tyres-logo.webp";
import appoloTyres from "../assets/tyresCompany/apollo-tyres-logo.webp";
import bridgestoneTyres from "../assets/tyresCompany/bridgeStone.png";
import goodYearTyres from "../assets/tyresCompany/goodYear.png";
import michelinTyres from "../assets/tyresCompany/michelin-logo.webp";

// tyre
import triangleTyre from "../assets/tyresCollection/triangle_tyres.png";

// about-us page
import missionIcon from "../assets/allSeason.png";

const imgSection = [
  {
    brand: "MRF",
    logo: mrfTyres,
  },
  {
    brand: "Apollo",
    logo: appoloTyres,
  },
  {
    brand: "CEAT",
    logo: ceatTyres,
  },
  {
    brand: "Yokohama",
    logo: YokoHamaTyres,
  },
  {
    brand: "GoodYear",
    logo: goodYearTyres,
  },
  {
    brand: "BridgeStone",
    logo: bridgestoneTyres,
  },

  {
    brand: "Michelin",
    logo: michelinTyres,
  },
];

const tyreInformation = [
  {
    term: "Tire Width",
    description: "Refers to the overall width of the tire in millimeters.",
  },
  {
    term: "Aspect Ratio",
    description:
      "The relationship between the tire height and width. In this example, the tire height is approximately 60% of the tire width.",
  },
  {
    term: "Diameter",
    description:
      "The tyre’s rim diameter is measured in inches taken from the wheel flange where the tyre is seated (bead seat area) to the same point on the opposite side.",
  },
];

const contactOptions = [
  {
    label: "Call Now",
    icon: <FaPhoneAlt />,
    href: "tel:017829421",
    bg: "bg-orange-500 hover:bg-orange-600",
  },
  {
    label: "Chat on WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/917829421",
    target: "_blank",
    rel: "noopener noreferrer",
    bg: "bg-green-500 hover:bg-green-600",
  },
  {
    label: "Send Enquiry",
    icon: <FaEnvelope />,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sudhankandel18@gmail.com&su=Website%20enquiry",
    target: "_blank",
    rel: "noopener noreferrer",
    bg: "bg-blue-500 hover:bg-blue-600",
  },
];

const tyres = [
  {
    name: "Triangle 215/45R18 Tyre",
    category: "Tyres",
    brand: "Triangle",
    rimDiameter: "18",
    width: "215",
    aspectRatio: "45",
    imageUrl: triangleTyre,
  },
];

const widths = [
  "155",
  "165",
  "175",
  "185",
  "195",
  "205",
  "215",
  "225",
  "235",
  "245",
  "255",
];

const diameters = ["13", "14", "15", "16", "17", "18", "19", "20"];

const aspects = ["45", "50", "55", "60", "65", "70", "75"];

const brands = [
  "MRF",
  "Apollo",
  "CEAT",
  "Yokohama",
  "GoodYear",
  "BridgeStone",
  "Michelin",
];

const infoAbout = [
  {
    header: "Effortless Fleet Management with Kap’s Tyres",
    paragraph: `Our mobile tyre services cover a variety of vehicles, including
        cars, 4x4s, SUVs, motorcycles, vans, quads, motorhomes, and beyond.
        We also serve heavy-duty needs for trucks, construction, agricultural,
        industrial, and utility vehicles, accommodating nearly all brands and types of tyres.
        We work with individuals, businesses, and communities, providing tailored, top-quality service at every step.
        Our team prioritizes staying connected with our clients, ensuring a personalized experience that addresses each unique need.`,
  },
  {
    header: "Kap’s Tyres: Reliable Experts in Tyre Services",
    paragraph: `Combining traditional skills with the latest technology, Kap’s Tyres offers an extensive range of tyres with a focus on safety. With a constantly updated inventory from major brands, we bring quality at competitive prices. Our commitment to expanding our mobile tyre services means that our customers can access an even broader range of services. With a loyal clientele, we’ve implemented strategies to ensure you get the best tyres, prioritizing high safety standards for all.`,
  },
  {
    header: "Staying Ahead with Kap’s Tyres",
    paragraph: `Equipped with advanced tools and technology, we meet the highest safety and quality standards in tyre fitting and replacement. Our status as tyre experts guarantees reliability and enhances your vehicle’s safety. Contact us for an estimate and experience peace of mind with every drive—because safe driving should be accessible and affordable.`,
  },
  {
    header: "Staying Ahead with Kap’s Tyres",
    paragraph: `With years of experience in tyre repair, our professionals provide the best mobile tyre services, ready to advise you on extending the life of your tyres and vehicle. Our services include inspection, puncture repair, onsite fitting, tyre recycling, rotation services, and expert guidance in choosing the right tyres. Whether you need a replacement or a service, count on Kap’s Tyres for excellence.`,
  },
  {
    header: "Our Story",
    paragraph: `Every day at Kap’s Tyres, we strive to be our best. It’s an approach that keeps us focused and prepared for the next challenge. Our unique offering is 24/7 mobile tyre services, keeping customers moving around the clock. With specialized expertise in Off-The-Road tyres, we work with nearly every major tyre brand. We seize every opportunity to keep you on the road, with our sights set on expanding our reach and impact across Australia.`,
  },
];

const teamMembers = [
  {
    name: "Manoj Paudel",
    role: "CEO & President",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Sudhan Kandel",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anita Sharma",
    role: "Lead Developer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ramesh Thapa",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Pooja Gurung",
    role: "QA Engineer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const ourMission = [
  {
    title: "Our Mission",
    image: missionIcon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos sit cumque veniam modi quo, iste ad. Minima, incidunt. Obcaecati?",
  },
  {
    title: "Our Vision",
    image: missionIcon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos sit cumque veniam modi quo, iste ad. Minima, incidunt. Obcaecati?",
  },
  {
    title: "Our Values",
    image: missionIcon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos sit cumque veniam modi quo, iste ad. Minima, incidunt. Obcaecati?",
  },
];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1743701168206-fec7ca13d651?q=80&w=866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 4,
    width: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1754404053337-7363006e4391?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
    height: 4,
    width: 6,
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1744395627443-fbe46009acef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 4,
    width: 6,
  },
  {
    src: "https://images.unsplash.com/photo-1754404053337-7363006e4391?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
    height: 1,
    width: 1,
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1744395627443-fbe46009acef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 4,
    width: 6,
  },
  {
    src: "https://images.unsplash.com/photo-1754404053337-7363006e4391?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
    height: 1,
    width: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1754404053337-7363006e4391?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
    height: 4,
    width: 6,
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1744395627443-fbe46009acef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 1,
    width: 1,
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1744395627443-fbe46009acef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 2,
    width: 3,
  },

  {
    src: "https://images.unsplash.com/photo-1754404053337-7363006e4391?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
    height: 1,
    width: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1754404053337-7363006e4391?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
    height: 4,
    width: 6,
  },

  {
    src: "https://images.unsplash.com/photo-1754404053337-7363006e4391?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
    height: 1,
    width: 1,
  },
];



const footerList = [
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];
const socialLinks = [
  {
    name: "Facebook",
    path: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
];
const productList = [
  { name: "Wheels", path: "/products/wheels" },
  { name: "Batteries", path: "/products/batteries" },
  { name: "Tyres", path: "/products/tyres" },
];

export {
  tyreInformation,
  widths,
  diameters,
  aspects,
  brands,
  tyres,
  infoAbout,
  teamMembers,
  ourMission,
  contactOptions,
  photos,
  imgSection,
  footerList,
  productList,
  socialLinks,
};
