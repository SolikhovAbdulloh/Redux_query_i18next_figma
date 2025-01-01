import React, { useEffect, useState } from "react";
import { Button, Empty, message, Skeleton } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons"; // Delete ikonkasini import qilish
import { DeleteShop } from "../../redux/market_slice/market";
import SkeletonImage from "antd/es/skeleton/Image";
import SkeletonInput from "antd/es/skeleton/Input";

function Shop() {
  const [loading, setLoading] = useState(true);

  const ShopProduct = useSelector((state) => state.market.Shop);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (productId) => {
    message.success("Mahsulot karzinkadan o'chirildi!");
    dispatch(DeleteShop(productId));
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="p-5 bg-gray-100">
      {ShopProduct.length === 0 ? (
        <div className="text-center mb-5 mt-5">
          <Empty
            className="text-[30px] font-semibold"
            description="В корзине ничего нет"
          />
          <Button
            onClick={() => navigate("/")}
            className="mt-4 bg-blue-600 text-white hover:bg-blue-700"
          >
            Asosiy sahifaga o'tish
          </Button>
        </div>
      ) : loading ? (
        <div className="    !w-full">
          <div className="flex justify-between gap-4">
            <Skeleton.Image className="!w-full !h-[300px]" active={true} />
            <Skeleton.Image className="!w-full !h-[300px]" active={true} />
            <Skeleton.Image className="!w-full !h-[300px]" active={true} />
            <Skeleton.Image className="!w-full !h-[300px]" active={true} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ShopProduct.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center relative"
            >
              <img
                className="w-full h-48 object-cover rounded-lg"
                src={product.image}
                alt={product.name}
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <h3 className="text-md text-gray-600">{product.price} UZS</h3>
                <Button
                  onClick={() => handleDelete(product.id)}
                  icon={<DeleteOutlined />}
                  type="danger"
                  className="absolute bottom-4 left-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
