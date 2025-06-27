import React, { useState } from "react"; 

export default function DynamicIsland() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-black rounded-3xl flex justify-center items-start relative overflow-hidden flex-[2]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/dynamicIsland.png"
        className="absolute inset-0 w-full h-full object-fill"
        alt="Dynamic Island Background"
      />

      <div className="z-10 flex mt-1">
        <div className="bg-black px-4 py-2 rounded-3xl space-y-2">
          <div className="w-28 border rounded-3xl justify-self-center">
            .
          </div>

          {isHovered && ( 
            <div className="flex flex-col items-center gap-2" >
              <div className="flex items-center gap-2">
                <img src="/songimg.png" className="rounded-full w-12 h-12" alt="Song Thumbnail" />
                <div className="text-white text-xs">
                  <p>After Dark</p>
                  <p>Mr.Kitty</p>
                </div>
              </div>

              <div className="text-white flex text-xs items-center w-full">
                <p>1:56</p>
                <div className="w-24 mx-2 border h-[8px] rounded-xl overflow-hidden">
                  <div className="w-[80%] h-[8px] bg-white"></div> 
                </div>
                <p>-0.58</p>
              </div>

              <div className="flex items-center justify-between w-full">
                <img className="w-6 h-fit" src="/Back.svg" alt="Back" />
                <img className="w-6 h-fit" src="/Pause.svg" alt="Pause" />
                <img className="w-6 h-fit" src="/Next.svg" alt="Next" />
                <img className="w-6 h-fit" src="/Airplay.svg" alt="Airplay" />
              </div>
            </div>
          )}

          {!isHovered && (
            <p className="text-white text-sm text-center" >
              Dynamic Island
            </p>
          )}
        </div>
      </div>
    </div>
  );
}