import React, { useEffect, useState } from "react";
import logo from "../../../src/assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { Avatar, Badge, Button, Select } from "antd";
import { useTranslation } from "react-i18next";
import "../../locale";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const LikeProduct = useSelector((state) => state.market.Like);
  const ShopProduct = useSelector((state) => state.market.Shop);

  const navigate = useNavigate();
  const { Option } = Select;
  const { t, i18n } = useTranslation();

  const change = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [time, setTime] = useState("");
  const [date, setdate] = useState("");
  setInterval(() => {
    const Time = new Date().toLocaleTimeString();
    const date = new Date().toDateString();
    setTime(Time);
    setdate(date);
  }, 1000);
  return (
    <div>
      <header className="bg-[black] flex justify-between items-center px-3 py-5 text-[white]">
        <img className="cursor-pointer w-[60px] " src={logo} alt="Logo" />

        <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
          <a
            href="#"
            onClick={() => navigate("/")}
            className="text-sm sm:text-base"
          >
            {t("clothing")}
          </a>
          <a
            href="#"
            onClick={() => navigate("/")}
            className="text-sm sm:text-base"
          >
            {t("footwear")}
          </a>
          <a
            href="#"
            onClick={() => navigate("/")}
            className="text-sm sm:text-base"
          >
            {t("accessories")}
          </a>
          <a
            href="#"
            onClick={() => navigate("/")}
            className="text-sm sm:text-base"
          >
            {t("brands")}
          </a>
          <a
            href="#"
            onClick={() => navigate("/")}
            className="text-sm sm:text-base"
          >
            {t("cost")}
          </a>
          <a
            href="#"
            onClick={() => navigate("/")}
            className="text-sm sm:text-base"
          >
            {t("information")}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaSearch className="text-[22px] " />
          <Badge count={LikeProduct.length}>
            <Button onClick={() => navigate("Like_page")}>
              <FaRegHeart className="text-[20px]" />
            </Button>
          </Badge>
          <Badge count={ShopProduct.length}>
            <Button onClick={() => navigate("Shop")}>
              <CiShoppingBasket className="text-[20px]" />
            </Button>
          </Badge>
          <Select onChange={change} defaultValue="ru">
            <Option value="uz">
              <Avatar
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
                round
                size="10"
                className="avatar"
              />
            </Option>
            <Option value="ru" className="option-item">
              <Avatar
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png"
                round
                size="30"
                className="avatar"
              />
            </Option>
            <Option value="en">
              <Avatar
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                round
                size="10"
                className="avatar"
              />
            </Option>
          </Select>
          <div className="flex-col flex ">
            <p className="text-[#0d99f8] text-[25px]">{time}</p>
            <p>{date}</p>
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-3 rounded-xl   items-start bg1">
        <h2 className="text-[51px]  font-black">{t("buts")}</h2>
        <p className="text-[19px] font-normal">{t("catalog")}</p>
        <Button className="w-[230px] h-16 bg-black text-[white]">
          {t("btn")}
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
