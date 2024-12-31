import {
  // FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaSnapchat,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
export const Footer = () => {
  return (
    <footer className="bg-primary text-white h-fit md:h-[50vh] mt-20 ">
      <div className="container px-5 mx-auto p-10 flex flex-col gap-10">
        <div className="top flex flex-wrap gap-5 md:flex-nowrap justify-between items-center ">
          <div className=" mt-8 font-almarai font-medium">
            <h3 className="text-xl md:text-2xl text-center w-full md:text-right md:w-[80%]">
              هل أنت مستعد الان لكي تصبح احد عملاء شركة أمكو النموذجية اتصل بنا
              وكن احد عملائنا المميزين
            </h3>
          </div>

          <div className="btn flex-1">
            <Link
              href="https://wa.me/0501144066"
              className="text-white transition hover:text-gray-500/75 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mx-auto md:mx-0 bg-transparent text-2xl font-bold flex justify-center items-center p-3 md:p-4  rounded-full w-40 shadow-sm shadow-gray hover:shadow-md hover:border hover:border-gray transition-all duration-300 text-white ">
                <span className="ml-1">→</span> اطلب الآن
              </button>
            </Link>
          </div>
        </div>
        <div className="bottom shadow-sm shadow-gray  rounded-3xl flex flex-col md:flex-row justify-center md:justify-between p-2 md:px-10 gap-6 md:gap-8 ">
          <div className="flex flex-col items-center order-3 md:order-1">
            <h3 className="text-xl font-bold font-arabic mb-4">تابعنا</h3>
            <div className="flex gap-1 justify-around items-center ">
              {/* <FaFacebook className="text-4xl cursor-pointer hover:shadow-sm hover:shadow-gray p-1 rounded-lg" /> */}
              <Link
                href={"http://www.twitter.com/asad_companySA"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-4xl cursor-pointer hover:shadow-sm hover:shadow-gray p-1 rounded-lg" />
              </Link>
              <Link
                href={"http://www.tiktok.com/@asadunitedco"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-4xl cursor-pointer hover:shadow-sm hover:shadow-gray p-1 rounded-lg" />
              </Link>
              <Link
                href={"http://instagram.com/AsadUnitedCoSA"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-4xl cursor-pointer hover:shadow-sm hover:shadow-gray p-1 rounded-lg" />
              </Link>
              <Link
                href={"https://snapchat.com/t/hNVKQmcO"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSnapchat className="text-4xl cursor-pointer hover:shadow-sm hover:shadow-gray p-1 rounded-lg" />
              </Link>
              <Link
                href={"http://youtube.com/@AsadUnitedCoSA"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-4xl cursor-pointer hover:shadow-sm hover:shadow-gray p-1 rounded-lg" />
              </Link>
            </div>
            <div className="gmail my-2">
              <Link
                href="mailto:AMCO112025@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-xl cursor-pointer shadow-sm shadow-gray p-1 rounded-lg">
                  AMCO112025@gmail.com
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center order-2 font-arabic font-bold">
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="flex items-center gap-5 text-xl">
              <li>
                <Link href="/" prefetch={true} className="hover:underline">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#" prefetch={true} className="hover:underline">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="#" prefetch={true} className="hover:underline">
                  خدمـاتنـا
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center order-1 md:order-3 font-arabic">
            <h3 className="text-xl mb-4">تواصل معنا</h3>
            <Link
              href="https://wa.me/0501144066"
              className="text-white transition hover:text-gray-500/75 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="font-bold text-5xl mb-5 hover:shadow-sm hover:shadow-gray rounded-md p-1" />
            </Link>
            <Link
              href="https://wa.me/0501144066"
              className="text-white transition hover:text-gray-500/75 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>0501144066</p>
            </Link>
            {/* <p>info@nomu.com.sa</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
