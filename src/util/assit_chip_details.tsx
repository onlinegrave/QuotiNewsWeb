import React from 'react';
import { Category } from "../model/types";
import EngineeringIcon from "../assets/icons/EngineeringIcon";
import BooksIcon from "../assets/icons/BooksIcon";
import FashionIcon from "../assets/icons/FashionIcon";
import HealthIcon from "../assets/icons/HealthIcon";
import GovtIcon from "../assets/icons/GovtIcon";
import StockChartIcon from "../assets/icons/StockChartIcon";
export const chipCategory: () => Category[] = () =>
   [{ name: "Tech", icon: <EngineeringIcon /> },
   { name: "Edu", icon: <BooksIcon /> },
   { name: "Govt", icon: <GovtIcon /> },
   { name: "Fashion", icon: <FashionIcon /> },
   { name: "Health", icon: <HealthIcon /> },
   { name: "Econs", icon: <StockChartIcon /> },



   ];

