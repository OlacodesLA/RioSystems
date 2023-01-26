import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { RiCustomerService2Line, RiCustomerServiceLine } from "react-icons/ri";
import { MdPriceCheck } from "react-icons/md";
import { GiNewShoot } from "react-icons/gi";
import { IoDiamondSharp } from "react-icons/io5";

const Cards = () => {
  return (
    <section>
      <div class="max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className=" mb-14 font-sans text-4xl font-bold tracking-tight  text-center text-gray-900 sm:text-4xl sm:leading-none">
          <br className="hidden md:block" />
          At{" "}
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-indigo-400" />
            <span className="relative inline-block text-deep-purple-accent-400">
              Rio Systems
            </span>
          </span>{" "}
          we are,
        </h2>
        <div class="grid  sm:grid-rows-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="bg-hero-pattern bg-cover bg-center bg-blend-overlay bg-slate-400 w-full md:h-[370px]  h-[230px] rounded-md"></div>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div
              class="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring cursor-pointer"
              href="/accountant"
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <RiCustomerServiceLine className="md:text-5xl text-3xl text-primary" />
              </span>

              <h2 class="mt-2 md:text-base text-sm font-bold">
                Customer Eccentricity
              </h2>
            </div>

            <div
              class="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring cursor-pointer"
              href="/accountant"
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <MdPriceCheck className="md:text-5xl text-3xl text-primary" />
              </span>

              <h2 class="mt-2 md:text-base text-sm font-bold">
                Pricing and Affordability
              </h2>
            </div>

            <div
              class="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring cursor-pointer"
              href="/accountant"
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <IoDiamondSharp className="md:text-5xl text-3xl text-primary" />
              </span>

              <h2 class="mt-2 md:text-base text-sm font-bold ">
                Reputation Associated with luxury and class
              </h2>
            </div>

            <div
              class="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring cursor-pointer"
              href="/accountant"
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <GiNewShoot className="md:text-5xl text-3xl text-primary" />
              </span>

              <h2 class="mt-2 md:text-base text-sm font-bold">
                Unique Experience and Newness
              </h2>
            </div>

            <div
              class="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring cursor-pointer"
              href="/accountant"
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <BsShieldFillCheck className="md:text-5xl text-3xl text-primary" />
              </span>

              <h2 class="mt-2 md:text-base text-sm font-bold">
                Safety Intergrity and Accessiblity
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
