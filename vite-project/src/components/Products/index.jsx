import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { FaRegStar, FaSmile } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Button, notification, Rate } from "antd";

import { useDispatch } from "react-redux";
import { LikedAdd, ShopdAdd } from "../../redux/market_slice/market";
function Products() {
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/Products");
    return res.data;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["TOVARLAR"],
    queryFn: getData,
  });

  const dispatch = useDispatch();

  const AddLikeProducts = (item) => {
    dispatch(LikedAdd(item));
    notification.open({
      message: "Like bosildi",
      type: "success",
    });
  };

  const AddShopProducts = (item) => {
    dispatch(ShopdAdd(item));
    notification.open({
      type:'warning',
      message:"Savatga qo'shildi"
    })
  };
  return (
    <div>
      {isLoading || isError ? (
        <p>Loading...</p>
      ) : (
        <div className="grid mt-4 mb-6 grid-cols-4 gap-4">
          {data.map((value, idx) => (
            <div key={idx}>
              <div
                key={value.id}
                className="w-full relative h-auto p-[30px] bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all"
              >
                <img
                  className="w-full bg-cover bg-center h-[200px] object-cover rounded-t-lg"
                  src={value.image}
                  alt={value.name}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{value.name}</h2>
                  <p className="text-gray-500 text-lg">{value.price}</p>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-b-lg">
                  <Button
                    onClick={() => AddShopProducts(value)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                  >
                    <MdOutlineAddShoppingCart />
                  </Button>
                  <button
                    onClick={() => AddLikeProducts(value)}
                    className=" absolute top-3 right-2 text-gray-600   text-[23px]"
                  >
                    <FaRegStar />
                  </button>
                  <Rate/>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
