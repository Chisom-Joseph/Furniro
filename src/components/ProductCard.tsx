import Image from "next/image";

type props = {
  new: boolean;
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

export default function ProductCard() {
  return (
    <div>
      <Image src="" alt="" width={20} height={20} />
    </div>
  );
}
