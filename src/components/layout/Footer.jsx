
import { MdEmail } from 'react-icons/md';
import { BiLogoFacebook, BiX, BiLogoInstagram, BiLogoGithub } from 'react-icons/bi';
import masterCard from "../../assets/images/Mastercard-Logo.png"
import paypal from "../../assets/images/paypal.png"
import GPay from "../../assets/images/googlePay.png"
import visa from "../../assets/images/VISA-logo.png"
import ApplePay from "../../assets/images/apple-pay.png"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4">
        <div className="relative  flex flex-col md:flex-row justify-between items-center bg-black p-6 rounded-2xl mb-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold w-full md:w-1/2 text-center md:text-left mx-7">
            STAY UPTO DATE ABOUT OUR <br /> LATEST OFFERS
          </h2>
          <div className="flex flex-col gap-3 w-full md:w-1/3 mx-7">
            <div className="relative">
              <MdEmail className="absolute text-slate-300 top-5 left-5" size={20} />
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-white px-12 py-3 rounded-[62px] w-full caret-slate-600 text-slate-600"
              />
            </div>
            <button className="bg-white text-black px-3 py-3 rounded-[62px]">Subscribe to Newsletter</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start text-sm mb-10 ">
          <div className="w-full md:w-1/5 mr-16">
            <h3 className="font-bold text-4xl mb-3 text-black">SHOP.CO</h3>
            <p>We have clothes that suit your style and which you're proud to wear. From women to men.</p>
            <div className="flex mt-4 space-x-4">
              <BiX className="rounded-full border border-slate-300 p-1 text-black" size={20} />
              <BiLogoFacebook className="rounded-full bg-black border border-slate-300 p-1 text-white" size={20} />
              <BiLogoInstagram className="rounded-full border border-slate-300 p-1 text-black" size={20} />
              <BiLogoGithub className="rounded-full border border-slate-300 p-1 text-black" size={20} />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6 w-full md:w-4/5">
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-3">COMPANY</h3>
              <ul className="space-y-2">
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-3">HELP</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-3">FAQ</h3>
              <ul className="space-y-2">
                <li><a href="#">Account</a></li>
                <li><a href="#">Manage Deliveries</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Payments</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-3">RESOURCES</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-5">
          <p className="text-sm">&copy; Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex space-x-4 items-center mt-4 md:mt-0">
            <img src={visa} alt="visaCard" width="30" />
            <img src={masterCard} alt="masterCard" width="30" />
            <img src={paypal} alt="payplaCard" width="40" />
            <img src={GPay} alt="googleCard" width="40" />
            <img src={ApplePay} alt="AppleCard" width="40" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

