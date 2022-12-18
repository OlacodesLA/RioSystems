const Hero = () => {
  return (
    <div>
      <section className="bg-blue-50">
        <div className="overflow-hidden pt-36">
          <div className="container  w-full px-6 md:px-10 lg:mx-10">
            <div className="flex lg:w-screen lg:flex-row flex-col justify-center lg:justify-between lg:items-center ">
              <div className="w-auto  ">
                <div className="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
                  <div className="flex flex-wrap justify-start items-center lg:-m-1">
                    <div className="w-auto p-1">
                      <a className="text-sm" href="">
                        &#x1F44B; Get in touch with us.
                      </a>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width="15"
                        height="15"
                        viewbox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="mb-6 text-4xl md:text-5xl font-bold font-heading md:max-w-xl leading-none">
                  Unlimited, Uninterrupted Power supply and adequate security
                </h1>
                <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">
                  Get top-class products and services with a view of making
                  profit, thus adding value to its cooperate clients through
                  effec
                </p>
                <div className="flex flex-wrap -m-2.5 mb-20">
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block">
                      <button
                        className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                        type="button"
                      >
                        Our Services
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block">
                      <button
                        className="py-4 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200"
                        type="button"
                      >
                        <div className="flex flex-wrap justify-center items-center -m-1">
                          <div className="w-auto p-1">
                            <svg
                              width="19"
                              height="18"
                              viewbox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div className="w-auto p-1">
                            <span>Book a call</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full md:w-1/2 p-8">
                <img
                  className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                  src="https://i.ibb.co/0QyB6hg/Whats-App-Image-2022-12-13-at-12-19-58-PM.jpg"
                  alt=""
                />
              </div> */}{" "}
              <div className="w-full lg:w-1/2 lg:mr-20">
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-end px-3">
                    <img
                      className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                      src="https://i.ibb.co/cbThk9y/Whats-App-Image-2022-12-13-at-12-19-44-PM.jpg"
                      alt=""
                    />
                    <img
                      className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                      src="https://i.ibb.co/8YTW9KM/Whats-App-Image-2022-12-13-at-12-19-48-PM-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <img
                      className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                      src="https://i.ibb.co/0QyB6hg/Whats-App-Image-2022-12-13-at-12-19-58-PM.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
