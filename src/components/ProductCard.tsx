import Image from "next/image";

import share from "../../public/icons/share.png";
import compare from "../../public/icons/compare.png";
import like from "../../public/icons/like.png";

import formatAmount from "../../utils/formatAmountUtil";
import calculateDiscountPercentage from "../../utils/getDiscountPercentageUtil";

type props = {
  cardNew: boolean;
  showBadge: boolean;
  image: {
    src: any;
    alt: string;
  };
  body: {
    title: string;
    body: string;
    price: number;
    discountedPrice: number;
  };
};

export default function ProductCard({
  cardNew,
  showBadge,
  image,
  body,
}: props) {
  const discountedPrice = formatAmount(body.discountedPrice);
  const price = formatAmount(body.price);

  return (
    <div className="w-max-[270px] relative cursor-pointer">
      {/* Card */}
      <Image
        className="w-full"
        src={image.src}
        alt={image.alt}
        width={200}
        height={200}
      />
      <div className="bg-grey-100 p-5">
        <h1 className="font-poppins-semibold text-2xl mb-3">{body.title}</h1>
        <p className="font-bold text-grey-300 text-xs mb-3">{body.body}</p>
        <div className="flex items-center justify-between">
          <span className="font-poppins-semibold text-lg">
            NGN {body.discountedPrice > 0 ? discountedPrice : price}
          </span>
          {body.discountedPrice > 0 ? (
            <span className="text-grey-200 line-through">{price}</span>
          ) : null}
        </div>
      </div>

      {/* Badge */}
      {showBadge && (
        <div
          className={`text-white text-xs w-[40px] h-[40px] grid items-center justify-center rounded-full absolute top-4 right-4 ${
            cardNew ? "bg-green" : "bg-red"
          }`}
        >
          {cardNew ? (
            <>New</>
          ) : (
            <>
              -{calculateDiscountPercentage(body.price, body.discountedPrice)}%
            </>
          )}
        </div>
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent hover:bg-black-transparent">
        <div className="flex items-center justify-center text-center h-full w-full opacity-0 hover:opacity-100">
          <div>
            <button className="text-gold bg-white py-2 px-12 mb-5 hover:bg-gold hover:text-white">
              Add to cart
            </button>
            <div className="font-poppins-semibold text-white text-xs flex items-center justify-center gap-5">
              <div className="flex items-center justify-between gap-1 hover:opacity-75">
                <Image src={share} alt="share" /> <span>Share</span>
              </div>
              <div className="flex items-center justify-between gap-1  hover:opacity-75">
                <Image src={compare} alt="compare" /> <span>Compare</span>
              </div>
              <div className="flex items-center justify-between gap-1  hover:opacity-75">
                <Image src={like} alt="like" /> <span>Like</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
