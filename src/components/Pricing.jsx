import React from "react";

import { CheckIcon } from "@heroicons/react/solid";

function Pricing() {
  return (
    <div className="h-[1500px] md:h-[700px] w-full bg-gray-900 ">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center py-5">
          <h3 className="text-gray-400 uppercase text-3xl"> Pricing </h3>
          <h1 className="text-white text-5xl mt-6 font-bold">
            The right price for your research.
          </h1>
          <p className="text-slate-400 text-2xl mt-8 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            soluta recusandae praesentium magni reprehenderit voluptatibus
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-y-10 gap-x-10 w-full">
          <div className=" bg-white rounded-2xl px-8 pt-6 shadow-2xl ml-6 w-[350px] md:ml-0 md:w-[590px]">
            <div className="flex flex-col">
              <div>
                <p className="text-black border rounded-xl bg-indigo-300 uppercase px-1 w-[90px]">
                  Standard
                </p>
              </div>
              <div className=" pt-3 flex">
                <h1 className="text-black text-5xl font-bold">$49</h1>
                <p className="text-black pt-6 font-bold"> /mo </p>
              </div>
              <div>
                <p className="text-black font-semibold pt-8 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet maxime ducimus quam.
                </p>
              </div>
              <div className="flex mt-6">
                <CheckIcon className="w-6 mr-4 text-green-800" />
                 <p className="text-black font-medium text-md"> Lorem, ipsum dolor.</p>
              </div>
              <div className="flex mt-6">
                <CheckIcon className="w-6 mr-4 text-green-800" />
                 <p className="text-black font-medium text-md"> Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="flex mt-6">
                <CheckIcon className="w-6 mr-4 text-green-800" />
                 <p className="text-black font-medium text-md"> Lorem, ipsum dolor sit.</p>
              </div>
              <div className="flex mt-6">
                <CheckIcon className="w-6 mr-4 text-green-800" />
                 <p className="text-black font-medium text-md"> Lorem, ipsum dolor.</p>
              </div>
              <div className="flex mt-6">
                <CheckIcon className="w-6 mr-4 text-green-800" />
                 <p className="text-black font-medium text-md"> Lorem, ipsum dolor.</p>
              </div>
              <div className="">
                  <button className="text-white border rounded-none mt-8 w-[280px] md:w-[525px] py-4 mb-8 bg-gray-800 hover:bg-white hover:text-black font-bold ">Get Started</button>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-2xl px-8 pt-6 shadow-2xl ml-6 w-[350px] md:ml-0 md:w-[590px]">
            <div className="flex flex-col">
              <div>
                <p className="text-black border rounded-xl bg-indigo-300 uppercase px-1 w-[98px]">
                  Enterprise
                </p>
              </div>
              <div className=" pt-3 flex">
                <h1 className="text-black text-5xl font-bold">$89</h1>
                <p className="text-black pt-6 font-bold"> /mo </p>
              </div>
              <div>
                <p className="text-black font-semibold pt-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, quas recusandae.
                </p>
              </div>
              <div className="flex mt-6">
                <CheckIcon className="w-6 mr-4 text-green-800" />
                 <p className="text-black font-medium text-md"> Lorem, ipsum dolor.</p>
              </div>
              <div className="flex mt-6">
                <CheckIcon className="w-6 mr-4 text-green-800" />
                 <p className="text-black font-medium text-md"> Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="flex mt-6">
                <CheckIcon className="w-6 mr-4 text-green-800" />
                 <p className="text-black font-medium text-md"> Lorem, ipsum dolor sit.</p>
              </div>
              <div className="flex mt-6">
                <CheckIcon className="w-6 mr-4 text-green-800" />
                 <p className="text-black font-medium text-md"> Lorem, ipsum dolor.</p>
              </div>
              <div className="flex mt-6">
                <CheckIcon className="w-6 mr-4 text-green-800" />
                 <p className="text-black font-medium text-md"> Lorem, ipsum dolor.</p>
              </div>
              <div className="">
                  <button className="text-white border rounded-none mt-8 w-[280px] md:w-[525px] py-4 mb-8 bg-gray-800 hover:bg-white hover:text-black font-bold">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
