export default function HeroSection() {
  return (
    <section className="bg-hero bg-contain h-screen grid p-12 mb-10">
      <div className="bg-pink max-w-screen-sm px-8 py-10 rounded-xl self-center justify-self-end">
        <span className="text-lg  tracking-widest">New Arrival</span>
        <h1 className="text-5xl font-poppins-semibold text-gold my-4">
          Discover Our <br /> New Collection
        </h1>
        <p className="font-poppins-medium text-lg mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="text-white bg-gold px-16 py-5">BUY NOW</button>
      </div>
    </section>
  );
}
