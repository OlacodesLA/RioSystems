import React from "react";

const Quote = () => {
  return (
    <div>
      <div className="relative ">
        <img
          src="https://i.ibb.co/gWkk61r/Build-The-Perfect-Alarm-System-Ever.webp"
          className="absolute inset-0 object-cover  w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-slate-800 ">
          {/* <svg 
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg> */}
          <div class="flex justify-center  items-center w-full h-screen ">
            <div class="container mx-auto my-4 pt-52 md:pt-0 px-4 lg:px-20">
              <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 bg-white  rounded-2xl shadow-2xl">
                <div class="flex">
                  <h1 class="font-bold uppercase text-5xl">Get a Quote</h1>
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                  />
                  <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name*"
                  />
                  <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                  />
                  <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Phone*"
                  />
                </div>
                <div class="my-4">
                  <textarea
                    placeholder="Message*"
                    class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div class="my-2 w-1/2 lg:w-1/4">
                  <button
                    class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                  >
                    Send Message
                  </button>
                </div>
              </div>

              <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
                <div class="flex flex-col text-white">
                  <h1 class="font-bold uppercase text-4xl my-4">
                    Drop in our office
                  </h1>
                  <p class="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam tincidunt arcu diam, eu feugiat felis fermentum id.
                    Curabitur vitae nibh viverra, auctor turpis sed, scelerisque
                    ex.
                  </p>

                  <div class="flex my-4 w-2/3 lg:w-1/2">
                    <div class="flex flex-col">
                      <i class="fas fa-map-marker-alt pt-2 pr-2" />
                    </div>
                    <div class="flex flex-col">
                      <h2 class="text-2xl">Main Office</h2>
                      <p class="text-gray-400">
                        5555 Tailwind RD, Pleasant Grove, UT 73533
                      </p>
                    </div>
                  </div>

                  <div class="flex my-4 w-2/3 lg:w-1/2">
                    <div class="flex flex-col">
                      <i class="fas fa-phone-alt pt-2 pr-2" />
                    </div>
                    <div class="flex flex-col">
                      <h2 class="text-2xl">Call Us</h2>
                      <p class="text-gray-400">Tel: xxx-xxx-xxx</p>
                      <p class="text-gray-400">Fax: xxx-xxx-xxx</p>
                    </div>
                  </div>

                  <div class="flex my-4 w-2/3 lg:w-1/2">
                    <a
                      href="https://www.facebook.com/ENLIGHTENEERING/"
                      target="_blank"
                      rel="noreferrer"
                      class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                    >
                      <i class="fab fa-facebook-f text-blue-900" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/enlighteneering-inc-"
                      target="_blank"
                      rel="noreferrer"
                      class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                    >
                      <i class="fab fa-linkedin-in text-blue-900" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
