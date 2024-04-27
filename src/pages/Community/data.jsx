import BoundlessPay from "../../assets/boundlesspay.png";
import Manilla from "../../assets/manilla.png";
import Pluralcode from "../../assets/pluralcode.png";

export const StartUpData = [
  {
    id: 1,
    image: (
      <img
        // src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/boundlesspay.png"
        src={BoundlessPay}
        className="w-[376px] h-[200px] rounded-lg"
      />
    ),
    name: "BoundlessPay",
    description:
      "Welcome to the future of banking with BoundlessPay! Seamlessly integrating a digital wallet and debit card, BoundlessPay empowers you to store and spend digital currencies effortlessly worldwide. With features like Global Transactions, Crypto Loans, Utility Payments, Digital Currency Investments, and Decentralized Finance (DeFi) Features, elevate your financial experience today. Join us and make BoundlessPay your go-to mobile banking app!",
    amountRaised: "$19.2M",
    numOfInvestors: "100",
    minInvestments: "$500",
  },
  {
    id: 2,
    image: (
      <img
        // src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/manilla.png"
        src={Manilla}
        className="w-[376px] h-[200px] rounded-lg"
      />
    ),
    name: "Manilla Technologies",
    description:
      "Embark on a transformative financial journey with Manilla Technologies, the ultimate bridge connecting traditional fintech to the revolutionary realm of Web 3.0. Our cutting-edge payment solutions redefine the way you manage your finances, transitioning from the conventional to the future of decentralized finance. It is the gateway to a future where finance is decentralized, secure, and tailored to your individual preferences.",
    amountRaised: "$19.2M",
    numOfInvestors: "100",
    minInvestments: "$500",
  },
  {
    id: 3,
    image: (
      <img
        // src="https://spcimagestorage001.blob.core.windows.net/spc-community-images/pluralcode.png"
        src={Pluralcode}
        className="w-[376px] h-[200px] rounded-lg"
      />
    ),
    name: "Pluralcode Institute",
    description:
      "At Pluralcode, we are driven by a profound mission: to build solutions for global impact. Dedicated to individuals, organizations, and corporates across Africa and beyond, we are pioneering a transformative journey to bridge the global talent gap. At Pluralcode, we are not just building a talent pool; we are nurturing a community of innovators poised to shape the future. ",
    amountRaised: "$19.2M",
    numOfInvestors: "100",
    minInvestments: "$500",
  },
  // Add more startup objects as needed
];

export const TalentData = [
  {
    id: 1,
    name: "Jane Doe",
    jobDescription: "Software Engineer",
    skills: ["frontend", "backend"],
    experience: "4 years",
    // Add more fields as needed
  },
  {
    id: 2,
    name: "John Doe",
    jobDescription: "Product Designer",
    skills: ["prototyping", "wireframing"],
    experience: "2 years",
    // Add more fields as needed
  },
  {
    id: 3,
    name: "Rebacca Simpson",
    jobDescription: "Robotics & Automation",
    skills: ["robotics", "automation"],
    experience: "3 years",
    // Add more fields as needed
  },
  {
    id: 4,
    name: "Joel Nwachukwu",
    jobDescription: "Project Manager",
    skills: ["management", "automation"],
    experience: "2 years",
    // Add more fields as needed
  },
];
