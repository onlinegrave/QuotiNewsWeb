import { Category } from "../model/types";
import EngineeringIcon from "../assets/icons/EngineeringIcon";
import BooksIcon from "../assets/icons/BooksIcon";
import FashionIcon from "../assets/icons/FashionIcon";
import HealthIcon from "../assets/icons/HealthIcon";
import GovtIcon from "../assets/icons/GovtIcon";
import StockChartIcon from "../assets/icons/StockChartIcon";

export const chipCategory: () => Category[] = () =>
   [{ name: "Business", icon: <EngineeringIcon /> },
   { name: "Entertainment", icon: <BooksIcon /> },
   { name: "General", icon: <GovtIcon /> },
   { name: "Science", icon: <FashionIcon /> },
   { name: "Sports", icon: <HealthIcon /> },
   { name: "Health", icon: <StockChartIcon /> },
   { name: "Technology", icon: <StockChartIcon /> },
   ];
