import React from 'react'

function button() {
  return (
    <div>
                   <div  className="inline-flex items-center justify-between
               transition-all duration-300 ease-in-out cursor-pointer">
                <div className="
                      flex items-center justify-center
                      bg-black rounded-full
                      transition-all duration-300 ease-in-out
                      overflow-hidden
                      bg-primary
                    "
                    style={{width: "0px", height: "40px", opacity: 0, transform: "scale(0)", flexShrink: 0}}
                    >
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="lucide lucide-arrow-right h-4 w-4 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                </div>

            <button onClick={toggleModal} className="
          px-6 py-2 bg-black text-white font-medium rounded-full
          transition-all duration-300 ease-in-out
          flex-grow cursor-pointer
          hover:shadow-md
          bg-primary
        ">
              View Document
            </button>
          </div>
    </div>
  )
}

export default button