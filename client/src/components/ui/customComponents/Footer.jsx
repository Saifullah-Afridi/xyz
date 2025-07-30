import React from "react";
import { assets, footerLinks } from "../../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" custom-container flex py-10  gap-3 bg-green-50 px-10 mt-20">
        <div className=" flex-2 flex flex-col gap-3 ">
          <img src={assets.logo} alt="website logo" className="w-[120px]" />
          <p className="text-body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            tempora.
          </p>
        </div>
        {footerLinks?.map((footerLink) => (
          <div key={footerLink.title} className="flex-1 flex flex-col  gap-1">
            <span className="text-primary font-semibold">
              {footerLink.title}
            </span>
            <div className="mt-3">
              {footerLink?.links.map((sublinks, index) => (
                <ul key={index}>
                  <li className="text-body-text cursor-pointer">
                    <Link to={sublinks.url}>{sublinks.text}</Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="custom-container px-10 text-center text-body-text py-4 bg-green-50 border-t-1 border-gray-300">
        Created by Saifullah
      </p>
    </>
  );
};

export default Footer;
