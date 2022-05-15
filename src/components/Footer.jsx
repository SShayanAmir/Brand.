import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa'

function Footer() {
  return (
    <div className="width-full bg-gray-900">
      <div className="grid md:grid-cols-5 border-b-2 border-gray-500">
        <div className="flex flex-col text-left my-8 px-8 ">
          <div>
            <p className="text-white uppercase font-bold text-lg"> Solutions </p>
          </div>
          <div className="ml-3">
            <p className=" text-white text-sm mt-2 font-normal">Marketing</p>
            <p className=" text-white text-sm mt-2 font-normal">Analytics</p>
            <p className=" text-white text-sm mt-2 font-normal">Commerce</p>
            <p className=" text-white text-sm mt-2 font-normal">Data</p>
            <p className=" text-white text-sm mt-2 font-normal">Cloud</p>
          </div>
        </div>
        <div className="flex flex-col text-left my-8 px-8 ">
          <div>
            <p className="text-white uppercase font-bold text-lg"> Support </p>
          </div>
          <div className="ml-3">
            <p className=" text-white text-sm mt-2 font-normal">Pricing</p>
            <p className=" text-white text-sm mt-2 font-normal">Documentation</p>
            <p className=" text-white text-sm mt-2 font-normal">Guides</p>
            <p className=" text-white text-sm mt-2 font-normal">API Status</p>
          </div>
        </div>
        <div className="flex flex-col text-left my-8 px-8 ">
          <div>
            <p className="text-white uppercase font-bold text-lg"> Company </p>
          </div>
          <div className="ml-3">
            <p className=" text-white text-sm mt-2 font-normal">About</p>
            <p className=" text-white text-sm mt-2 font-normal">Blog</p>
            <p className=" text-white text-sm mt-2 font-normal">Jobs</p>
            <p className=" text-white text-sm mt-2 font-normal">Press</p>
            <p className=" text-white text-sm mt-2 font-normal">Partners</p>
          </div>
        </div>
        <div className="flex flex-col text-left my-8 px-8 ">
          <div>
            <p className="text-white uppercase font-bold text-lg"> Legal </p>
          </div>
          <div className="ml-3">
            <p className=" text-white text-sm mt-2 font-normal">Claim</p>
            <p className=" text-white text-sm mt-2 font-normal">Privact</p>
            <p className=" text-white text-sm mt-2 font-normal">Policies</p>
            <p className=" text-white text-sm mt-2 font-normal">Terms</p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-left my-8 pr-2">
          <div>
            <p className="text-white uppercase font-bold"> Subscribe to Our News Letter </p>
          </div>
          <div className="">
            <p className=" text-white text-sm mt-2 font-normal">The latest news, articles, and resources, sent to your inbox weekly.</p>
          </div>
          <div className="">
            <input type="email" placeholder="Enter your Email" className="border rounded-md border-slate-500 mr-2"/>
            <button className=" hover:bg-indigo-600 hover:text-white py-1 px-2"> Subscribe </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-w-[1240px] py-3 mx-auto">
        <div>
          <h6 className="text-gray-600 font-bold">2022 Workflow, LLC. All rights reserved.</h6>
        </div>
        <div className="flex justify-between">
          <FaFacebook className="w-16 text-slate-500"/>
          <FaGithub className="w-16 text-slate-500"/>
          <FaInstagram className="w-16 text-slate-500"/>
          <FaTwitter className="w-16 text-slate-500"/>
          <FaTwitch className="w-16 text-slate-500"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
