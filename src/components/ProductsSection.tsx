import ProductCard from "./ProductCard";

import syltherine from "../../public/images/syltherine.png";
import leviosa from "../../public/images/leviosa.png";
import lolito from "../../public/images/lolito.png";
import respira from "../../public/images/respira.png";
import grifo from "../../public/images/grifo.png";
import muggo from "../../public/images/muggo.png";
import pingky from "../../public/images/pingky.png";
import potty from "../../public/images/potty.png";

const cards = [
  {
    cardNew: false,
    showBadge: true,
    image: {
      src: syltherine,
      alt: "Syltherine",
    },
    body: {
      title: "Syltherine",
      body: "Stylish cafe chair",
      price: 3500,
      discountedPrice: 2500,
    },
  },
  {
    cardNew: true,
    showBadge: false,
    image: {
      src: leviosa,
      alt: "leviosa",
    },
    body: {
      title: "Leviosa",
      body: "Stylish cafe chair",
      price: 2500,
      discountedPrice: 3500,
    },
  },
  {
    cardNew: false,
    showBadge: true,
    image: {
      src: lolito,
      alt: "lolito",
    },
    body: {
      title: "Lolito",
      body: "Luxury big sofa",
      price: 14000,
      discountedPrice: 7000,
    },
  },
  {
    cardNew: true,
    showBadge: true,
    image: {
      src: respira,
      alt: "respira",
    },
    body: {
      title: "Respira",
      body: "Outdoor bar table and stool",
      price: 500,
      discountedPrice: 0,
    },
  },
  {
    cardNew: true,
    showBadge: false,
    image: {
      src: grifo,
      alt: "grifo",
    },
    body: {
      title: "Grifo",
      body: "Night lamp",
      price: 1500,
      discountedPrice: 0,
    },
  },
  {
    cardNew: true,
    showBadge: true,
    image: {
      src: muggo,
      alt: "muggo",
    },
    body: {
      title: "Muggo",
      body: "Small mug",
      price: 150,
      discountedPrice: 0,
    },
  },
  {
    cardNew: false,
    showBadge: true,
    image: {
      src: pingky,
      alt: "pingky",
    },
    body: {
      title: "Pingky",
      body: "Cute bed set",
      price: 14000,
      discountedPrice: 7000,
    },
  },
  {
    cardNew: true,
    showBadge: true,
    image: {
      src: potty,
      alt: "potty",
    },
    body: {
      title: "Potty",
      body: "Minimalist flower pot",
      price: 500,
      discountedPrice: 0,
    },
  },
];

export default function ProductsSection() {
  return (
    <section className="px-10 mb-10">
      <h2 className="text-center font-poppins-bold text-4xl mb-7">
        Our Products
      </h2>
      <div className="flex items-center justify-center gap-5 flex-wrap mb-5">
        {cards.length > 0 ? (
          cards.map((card) => {
            return (
              <ProductCard
                cardNew={card.cardNew}
                showBadge={card.showBadge}
                body={{
                  title: card.body.title,
                  body: card.body.body,
                  price: card.body.price,
                  discountedPrice: card.body.discountedPrice,
                }}
                image={{ src: card.image.src, alt: card.image.alt }}
              />
            );
          })
        ) : (
          <span className="text-center">There is currently not product</span>
        )}
      </div>

      <button className="text-center mx-auto block text-gold border-solid border-[1px] border-gold p-3 py-2 px-12 hover:bg-gold hover:text-white">
        See More
      </button>
    </section>
  );
}
