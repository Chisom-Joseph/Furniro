import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" border-t-2 py-10 px-20">
      {/* Footer top */}
      <div className="flex flex-wrap items-start justify-between gap-10 pb-10">
        {/* Location */}
        <div>
          <span className="font-montserrat font-bold text-2xl block mb-16">
            Funiro.
          </span>
          <span className="text-grey-200 max-w-[20dvw] block">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </span>
        </div>

        {/* Links */}
        <div>
          <h5 className="font-poppins-semibold text-grey-200 mb-10">Links</h5>
          <nav className="leading-[5rem]">
            <Link className="font-poppins-semibold block" href="/">
              Home
            </Link>
            <Link className="font-poppins-semibold block" href="/">
              Shop
            </Link>
            <Link className="font-poppins-semibold block" href="/">
              About
            </Link>
            <Link className="font-poppins-semibold block" href="/">
              Contact
            </Link>
          </nav>
        </div>

        {/* Help */}
        <div>
          <h5 className="font-poppins-semibold text-grey-200 mb-10">Help</h5>
          <nav className="leading-[5rem]">
            <Link className="font-poppins-semibold block" href="/">
              Payment Options
            </Link>
            <Link className="font-poppins-semibold block" href="/">
              Returns
            </Link>
            <Link className="font-poppins-semibold block" href="/">
              Privacy Policies
            </Link>
          </nav>
        </div>

        {/* Help */}
        <div>
          <h5 className="font-poppins-semibold text-grey-200 mb-10">
            Newsletter
          </h5>
          <form className="flex gap-4">
            <input
              className="outline-none border-b-2 border-black block"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button className="outline-none border-b-2 border-black block">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t-2 border-solid pt-10">
        &copy; {new Date(Date.now()).getFullYear()} Furino All rights reserved
      </div>
    </footer>
  );
}
