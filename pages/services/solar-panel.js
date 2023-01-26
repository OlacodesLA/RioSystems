import React from "react";
import Navbar from "../../components/Navbar";
import SolarPanel from "../../components/Services/SolarPanel";

const solarpanel = () => {
  return (
    <div>
      <div className="bg-[#EFF6FF]">
        <div className="lg:bg-gradient-to-l from-[#4900EE] to-indigo-600 ">
          <div className=" lg:bg-hero-svg  w-full h-full bg-cover bg-center relative overflow-hidden">
            <svg
              viewBox="0 0 29.31 4.29"
              className="text-gray-300 fill-current absolute w-20 top-[89%] right-10"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M4.29,2.15A2.15,2.15,0,1,1,2.15,0,2.14,2.14,0,0,1,4.29,2.15Z" />
                  <path d="M12.63,2.15A2.15,2.15,0,1,1,10.48,0,2.14,2.14,0,0,1,12.63,2.15Z" />
                  <path d="M21,2.15A2.15,2.15,0,1,1,18.82,0,2.14,2.14,0,0,1,21,2.15Z" />
                  <path d="M29.31,2.15A2.15,2.15,0,1,1,27.16,0,2.15,2.15,0,0,1,29.31,2.15Z" />
                </g>
              </g>
            </svg>
            <Navbar />
            <SolarPanel page={"Solar Panel"} />
          </div>
        </div>
        {/* <ServicesContent /> */}
        <div className="px-4 py-16 mx-auto w-screen  flex justify-between gap-10 text-black  lg:text-black  sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-10 lg:py-20">
          <div className="grid max-w-screen-2xl mx-auto  gap-8 lg:grid-cols-2 sm:mx-auto">
            <div className="grid grid-cols-2 gap-5">
              <img
                className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                src="https://i.ibb.co/g9fvSwn/photovoltaics-solar-power-station-energy-from-natural-1.jpg"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://i.ibb.co/99BN3Fb/Whats-App-Image-2022-12-13-at-12-19-45-PM.jpg"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://i.ibb.co/gdyr9r1/inverter.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center text-justify">
              <div className="flex">
                <div className="mb-4">
                  <p className="text-md ">
                    Gaining Access to your business and home should be easy for
                    employees, occupants and impossible for intruders. With our
                    access control security systems services, you get the
                    comfort of knowing your property and information are
                    protected, so you can focus on what is most important at
                    work, running your business. At Rio-System, we have variety
                    of access control solutions customized to what works best
                    for your particular business and residential needs. Access
                    control systems controls and monitor intruders.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <h6 className="mb-4 text-xl font-semibold leading-5">
                    THERE AREN’T ANY SHORT CUT WHEN IT COMES TO YOUR SAFETY DOOR
                    ENTRY & KEY CARD ACCESS SYSTEMS
                  </h6>
                  <p className="text-md mb-4">
                    Make your location easily accessible to employees while
                    keeping your property protected. Our door entry systems can
                    be tailored to fit the needs of your business, no matter its
                    size. We offer access card systems as well as keypad
                    systems, biometric systems for various access points
                    throughout a building, such as strong rooms, sensitive data
                    storage, in addition to entrances and exits to your
                    property.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mb-4">
                  {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                  <p className="text-md ">
                    With the installation of our key card and biometric access
                    systems, your business will never have to question who has
                    been in and out. You will be able to know who had access,
                    the timing of their entry and exit, and where the entrance
                    occurred. All of this information will lead to a better
                    managed business, and ultimately, more control over your
                    property and the information you work so hard to get
                    everyday. Our key card access systems also alleviates the
                    need for traditional keys, eliminating trips to the hardware
                    store every time one is inevitably lost, or the early
                    morning or late night call you get when you have to let
                    someone who forgot their keys into the building.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mb-4">
                  {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                  <p className="text-md ">
                    We are available for on site installation and maintenance;
                    our number one priority is that your system is reliable and
                    held to the highest standards, day in and day out. Contact
                    us today for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default solarpanel;
