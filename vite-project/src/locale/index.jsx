import i18next from "i18next";
import { initReactI18next } from "react-i18next";
i18next.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        clothing: "Одежда",
        footwear: "Обувь",
        accessories: "Аксессуары",
        brands: "Бренды",
        cost: "Расчет стоимости",
        information: "Информация",
        buts: "Широкий  ассортимент Одежды",
        catalog:
          "Одежда от известные брендов у нас в каталоге.Только качественные вещи.",
        btn: "Перейти в каталог",
      },
    },
    uz: {
      translation: {
        clothing: "Kiyimlar",
        footwear: "Poyabzallar",
        accessories: "Aksessuarlar",
        brands: "Brendlar",
        cost: "Narxni hisoblash",
        information: "Ma'lumotlar",
        buts: "Kiyimlarning keng assortimenti",
        catalog:
          "Taniqli brendlarning kiyimlari bizning katalogimizda faqat yuqori sifatli mahsulotlar.",
        btn: "Kataloga otish",
      },
    },
    en: {
      translation: {
        clothing: "Clothing",
        footwear: "Footwear",
        accessories: "Accessories",
        brands: "Brands",
        cost: "Cost calculation",
        information: "Information",
        buts: "Wide range of Clothing",
        catalog:
          "Clothes from well-known brands are in our catalogue. Only high-quality items.",

        btn: "Go to Catalog",
      },
    },
  },
  lng: "ru",
  fallbackLng: "ru",
});

export default i18next;
