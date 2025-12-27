import headerLogo from "/images/avatar.jpg";
import favIcon from "/images/favicon-32x32.png";
import dogOne from '/images/dog-image-1.jpg'
import dogTwo from '/images/dog-image-2.jpg'
import dogThree from '/images/dog-image-3.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronCircleRight } from "react-icons/fa";

const ChatApp = () => {
  const Name = "Samuel Green";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center  p-4 md:p-6 lg:p-8 min-w-screen">
      
  
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start w-full max-w-6xl">
        
  
        <div className="relative lg:absolute w-full lg:w-auto">
          <div className="bg-fuchsia-600 w-full lg:w-[500px] xl:w-[600px] h-[1100px] sm:h-[1100px] lg:h-[800px] xl:h-[950px] 
                        rounded-b-full lg:rounded-b-full lg:rounded-bl-none
                        -mt-20 lg:-mt-40 lg:-ml-20 xl:-ml-32
                        flex items-center justify-center lg:justify-start">
            
       
            <div className="absolute top-20 lg:top-auto lg:relative 
                          w-full max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-md 
                          h-auto lg:h-[700px] xl:h-[800px] 
                          mx-auto lg:mx-0
                          lg:ml-12 xl:ml-24 lg:mt-20 xl:mt-32">
              
            
              <div className="bg-slate-300 w-full 
                            rounded-3xl lg:rounded-4xl shadow-lg 
                            p-4 sm:p-5 lg:p-6">
                
                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-500 via-fuchsia-600 
                              h-16 sm:h-20 rounded-t-2xl lg:rounded-t-3xl
                              px-4 sm:px-6 flex items-center gap-3
                              text-white font-mono parent">
                  
                  <img
                    src={favIcon}
                    alt="menu"
                    className="w-5 sm:w-6 cursor-pointer"
                  />

                  <img
                    src={headerLogo}
                    alt="avatar"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                  />

                  <div className="flex-1 leading-tight">
                    <p className="text-sm sm:text-base font-semibold mt-4 ms-7">{Name}</p>
                    <p className="text-xs sm:text-sm opacity-80 ms-7">
                      Available to walk
                    </p>
                  </div>

                  <BsThreeDotsVertical className="text-lg sm:text-xl cursor-pointer" />
                </div>

                {/* Chat Messages Container */}
                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  
                  {/* Received Messages */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-pink-50 w-4/5 sm:w-3/4 max-w-xs p-3 sm:p-4 rounded-2xl rounded-tl-none text-fuchsia-600 text-sm sm:text-base">
                      That sounds great, I will be happy with that
                    </div>
                    
                    <div className="bg-pink-50 w-4/5 sm:w-3/4 max-w-xs p-3 sm:p-4 rounded-2xl rounded-tl-none text-fuchsia-600 text-sm sm:text-base">
                      Could you send over some pictures of your dog please?
                    </div>
                  </div>

                  {/* Sent Images */}
                  <div className="flex justify-end space-x-2 sm:space-x-3 mt-4">
                    <img src={dogOne} alt="dogOne" className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover" />
                    <img src={dogTwo} alt="dogTwo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover" />
                    <img src={dogThree} alt="dogThree" className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover" />
                  </div>

                  {/* Sent Messages */}
                  <div className="flex flex-col items-end space-y-3 sm:space-y-4">
                    <div className="bg-white w-4/5 sm:w-3/4 max-w-xs p-3 sm:p-4 rounded-2xl rounded-tr-none text-gray-700 text-sm sm:text-base">
                      Here are a few pictures. She's a happy girl!
                    </div>
                    
                    <div className="bg-white w-3/5 sm:w-1/2 max-w-xs p-3 sm:p-4 rounded-2xl rounded-tr-none text-gray-700 text-sm sm:text-base">
                      Can you make it?
                    </div>
                  </div>

                  {/* Received Message with Long Text */}
                  <div className="bg-pink-50 w-4/5 sm:w-3/4 max-w-xs p-3 sm:p-4 rounded-2xl rounded-tl-none text-fuchsia-600 text-sm sm:text-base">
                    She looks so happy! The time we discussed works. How long shall I take her out for?
                  </div>

                  {/* Price Options */}
                  <div className="space-y-3 sm:space-y-4 mt-4">
                    <div className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 
                                  w-full max-w-sm p-4 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 flex items-center justify-center">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white"></div>
                        </div>
                        <span className="text-white font-semibold text-sm sm:text-base">
                          30 minute walk
                        </span>
                      </div>
                      <span className="text-white font-bold text-lg sm:text-xl">
                        $29
                      </span>
                    </div>

                    <div className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 
                                  w-full max-w-sm p-4 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 flex items-center justify-center">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white"></div>
                        </div>
                        <span className="text-white font-semibold text-sm sm:text-base">
                          1 hour walk
                        </span>
                      </div>
                      <span className="text-white font-bold text-lg sm:text-xl">
                        $49
                      </span>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="mt-6 sm:mt-8 relative">
                  <input 
                    type="text" 
                    placeholder="Type your message..."
                    className="w-full h-12 sm:h-14 pl-5 pr-14 rounded-full bg-white 
                             text-gray-700 placeholder-gray-400 text-sm sm:text-base
                             focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 
                                  w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center 
                                  text-white rounded-full 
                                  transition-colors bg-black cursor-pointer">
                    <FaChevronCircleRight className="text-lg sm:text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - Positioned to the right on desktop */}
        <article className="w-full max-w-sm sm:max-w-md lg:max-w-lg 
                          text-center lg:text-left 
                          mt-8 lg:mt-0 lg:ml-auto lg:pl-12 xl:pl-24">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
            Simple Booking
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose">
            Stay in touch with our dog walkers through the chat interface. This makes it easy to 
            discuss arrangements and make bookings. Once the walk has been completed you can 
            rate your walker and book again all through the chat.
          </p>
        </article>
      </div>
    </div>
  );
};

export default ChatApp;