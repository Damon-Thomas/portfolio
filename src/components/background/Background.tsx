// To do
// Clean up file by using components
// Style year entries witha background and padding
// color code entries
// finish entries

export default function Background() {
  return (
    <div className="p-2 sm:p-4 md:p-6 flex-col gap-4">
      <h1 className="text-left font-black text-7xl py-4">Background</h1>
      <div className="grid  grid-cols-[1fr_auto_auto_auto_1fr] grid-rows-14">
        {/* Far left column - content area */}
        <div className=" row-span-14 grid grid-rows-14 font-black text-base sm:text-lg md:text-xl">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className="flex w-full items-end justify-end ">
            <p className="max-w-xs">
              {" "}
              Commisioned as an officer in the Canadian Armed Forces and
              Graduated from RMC
            </p>
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className="flex w-full items-end justify-end ">
            <p className="max-w-xs">
              Joined the military and commenced studying at the Royal Military
              College of Canada
            </p>
          </div>
        </div>

        {/* Left buffer for arrows */}
        <div className="row-span-14 min-w-12 sm:min-w-16 md:min-w-20 grid  mr-2 sm:mr-4 grid-rows-14 border-foreground">
          <div className=""></div>
          <div className="flex flex-col justify-center">
            <div className="  border-b-2"></div>
          </div>{" "}
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className="flex flex-col justify-center">
            <div className="  border-b-2"></div>
          </div>{" "}
          <div className=""></div>
          <div className=""></div>
          <div className="flex flex-col justify-center">
            <div className="  border-b-2"></div>
          </div>
        </div>

        {/* Center timeline with years */}
        <div className="row-span-14  grid grid-rows-14">
          {[
            2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
            2014, 2013, 2012,
          ].map((year) => (
            <div key={year} className="flex flex-col">
              <div className="grid grid-cols-2 min-h-8 flex-1">
                <div className="border-r-2 border-foreground"></div>
                <div className=""></div>
              </div>
              <div className=" text-base font-black text-foreground whitespace-nowrap">
                {year}
              </div>
              <div className="grid grid-cols-2 min-h-8 flex-1">
                <div className="border-r-2 border-foreground"></div>
                <div className=""></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right buffer for arrows */}
        <div className="row-span-14 min-w-12 sm:min-w-16 md:min-w-20 grid  ml-2 sm:ml-4 grid-rows-14 border-foreground">
          <div className=""></div>
          <div className="flex flex-col justify-center">
            <div className="  border-b-2"></div>
          </div>{" "}
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className="flex flex-col justify-center">
            <div className="  border-b-2"></div>
          </div>{" "}
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>

        {/* Far right column - content area */}
        <div className=" row-span-14 grid grid-rows-14 font-black text-base sm:text-lg md:text-xl">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className="flex w-full items-end justify-start ">
            <p className="max-w-xs">
              Worked with the Royal Canadian Armoured Corps taking courses and
              processing security clearances
            </p>
          </div>{" "}
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
