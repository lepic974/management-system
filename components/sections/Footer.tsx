import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div className="flex w-full h-[250px] text-14-regular justify-end items-end mx-auto bottom-0">
        <p className="flex justify-items-end p-10 xl:text-left mr-auto">
          2024 © YaniPay, SAS - All right reserved.
        </p>

        <div className="flex flex-row p-10">
          <Link
            href="/"
            className="flex items-center justify-between gap-2 px-3 xl:text-right cursor-pointer"
          >
            Privacy
          </Link>
          <p className="flex items-center"> | </p>
          <Link
            href="/"
            className="flex items-center justify-between gap-2 px-3 xl:text-right cursor-pointer"
          >
            CGU
          </Link>
          <p className="flex items-center"> | </p>
          <Link
            href="/"
            className="flex items-center justify-between gap-2 px-3 xl:text-right cursor-pointer"
          >
            Cookies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
