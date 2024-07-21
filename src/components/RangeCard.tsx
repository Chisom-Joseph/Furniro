import Image from "next/image";

type props = {
  card: {
    text: String;
    image: {
      src: any;
      alt: string;
    };
  };
};

export default function RangeCard({
  card: {
    text,
    image: { src, alt },
  },
}: props) {
  return (
    <div>
      <Image
        className="rounded-xl mb-6"
        src={src}
        alt={alt}
        width={350}
        height={350}
      />
      <span className="text-center text-lg font-poppins-semibold block">
        {text}
      </span>
    </div>
  );
}
