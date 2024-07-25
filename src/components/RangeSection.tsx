import RangeCard from "./RangeCard";

import diningroomImage from "../../public/images/diningroom.png";
import livingroomImage from "../../public/images/livingroom.png";
import bedroomImage from "../../public/images/bedroom.png";

type card = { text: string; image: {} };

export default function RangeSection() {
  return (
    <section className="px-10 mb-12">
      <h2 className="text-center font-poppins-bold text-3xl  mb-1">
        Browse The Range
      </h2>
      <p className="text-center mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <RangeCard
          card={{
            text: "Dining",
            image: {
              src: diningroomImage,
              alt: "Dining",
            },
          }}
        />
        <RangeCard
          card={{
            text: "Living",
            image: {
              src: livingroomImage,
              alt: "Livingroom",
            },
          }}
        />
        <RangeCard
          card={{
            text: "Bedroom",
            image: {
              src: bedroomImage,
              alt: "Bedroom",
            },
          }}
        />
      </div>
    </section>
  );
}
