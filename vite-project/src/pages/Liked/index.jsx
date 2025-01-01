import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, message, notification } from "antd";
import { DeleteOutlined, SmileTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { DeleteLikeProduct } from "../../redux/market_slice/market";
import { PiSmileySad } from "react-icons/pi";
function Liked() {
  const Likeproducts = useSelector((state) => state.market.Like);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Mahsulotni o'chirish funksiyasi
  //   const handleRemove = (productId) => {
  //     dispatch(removeFromLike(productId)); // Redux store'dan mahsulotni o'chirish
  //   };

  const DeleteLike = (productId) => {
    dispatch(DeleteLikeProduct(productId));
    message.success("Maxsulot ochirildi");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Yoqtirilgan Mahsulotlar
        </h1>

        {Likeproducts.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-xl justify-center flex gap-3 items-center font-semibold text-gray-600 mb-4">
              Maxsulot yo'q
              <PiSmileySad className="text-[30px]" />
            </h2>
            <Button
              onClick={() => navigate("/")}
              type="primary"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Asosiy sahifaga qaytish
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Likeproducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  className="w-full h-56 object-cover rounded-lg"
                  src={product.image}
                  alt={product.name}
                />
                <div className="mt-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-md text-gray-500 mt-2">
                    {product.price} UZS
                  </p>
                </div>

                <Button
                  onClick={() => DeleteLike(product.id)}
                  icon={<DeleteOutlined />}
                  type="danger"
                  className="absolute top-3 right-3 rounded-full text-white bg-red-600 hover:bg-red-700 focus:outline-none"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Liked;
