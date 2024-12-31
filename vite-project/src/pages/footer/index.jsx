import React from "react";
import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button, Input } from "antd";
import tel from "../../assets/iphone.png";
function Footer() {
  return (
    <div>
      <div className="flex relative text-[white]  p-[20px] rounded-xl mb-[50px] items-start bg-[#27b8fa]">
        <div className="mb-7  flex flex-col gap-9 justify-between items-start mt-4 p-4">
          <p className="text-[61px] font-black">
            Рассчитать <br /> стоимость
          </p>
          <p className="text-[16px] font-normal">
            Если вам не удалось найти то, что искали, вы всегда можете
            <br />
            воспользоваться автоматическим расчетом стоимость заказа на
            <br />
            маркетплейсе Poizon, включая комиссию сервиса и доставку.
          </p>
          <Button className="w-[294px] h-[66px] bg-black  text-white">Рассчитать стоимость</Button>
        </div>
        <img
          className="w-[367px] h-[580px] absolute bottom-3  right-0"
          src={tel}
        />
      </div>
      <div className="bg-[black] rounded-xl px-3 py-4 flex justify-between text-white items-start">
        <div className="flex flex-col items-start gap-3 ">
          <p className="font-black text-[20px]">Каталог</p>
          <a className="text-[15px] font-normal" href="#">
            Одежда
          </a>
          <a className="text-[15px] font-normal" href="#">
            Обувь
          </a>
          <a className="text-[15px] font-normal" href="#">
            Аксессуары
          </a>
          <a className="text-[15px] font-normal" href="#">
            Расчет стоимости
          </a>
        </div>
        <div className="flex flex-col items-start gap-3 ">
          <p className="font-black text-[20px]">Информация</p>
          <a className="text-[15px] font-normal" href="#">
            Одежда
          </a>
          <a className="text-[15px] font-normal" href="#">
            Обувь
          </a>
          <a className="text-[15px] font-normal" href="#">
            Аксессуары
          </a>
          <a className="text-[15px] font-normal" href="#">
            Контакты
          </a>
          <a className="text-[15px] font-normal" href="#">
            FAQ
          </a>
        </div>
        <div className="flex flex-col items-start gap-3 ">
          <p className="font-black text-[20px]">Контакты</p>
          <a className="text-[15px] font-normal" href="#">
            info@xwear.info
          </a>
          <a className="text-[15px] font-normal" href="#">
            +7 993 608 38 85
          </a>
          <a className="text-[15px] font-normal" href="#">
            Мессенджеры
          </a>
          <span className="flex items-center gap-3">
            <BsTelegram className="text-[25px] cursor-pointer" />
            <IoLogoWhatsapp className="text-[25px] cursor-pointer" />
          </span>
          <a className="text-[15px] font-normal" href="#"></a>
        </div>
        <div className="flex flex-col items-start gap-3 ">
          <p className="font-black text-[20px]">Подписка на новости</p>
          <a className="text-[15px] font-normal" href="#">
            Будьте в курсе скидок и новостей
          </a>
          <Input placeholder="Email" className="text-[black] bg-slate-500 " />
          <a href="#">
            Подписываясь на рассылку вы соглашатесь <br /> с обработкой
            персональных данных
          </a>
          <a href="#">
            Политика <br /> конфиденциальности
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
