const ShimmerUI = () => {
  return (
    <div className="flex flex-wrap ml-72 justify-evenly bg-black -mt-[45.5rem] float-right w-[80%] h-[728px] overflow-y-scroll ">
      <div className="flex flex-col items-center justify-center min-h-screen -mt-32">
        <div className="flex space-x-2">
          <div className="h-4 w-4 rounded-full bg-red-600 animate-bounce"></div>
          <div className="h-4 w-4 rounded-full bg-red-600 animate-bounce2"></div>
          <div className="h-4 w-4 rounded-full bg-red-600 animate-bounce"></div>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-white">
            Loading...
          </p>
          <p className="text-lg text-gray-300">
           Your Music is on the way!!
          </p>
        </div>
      </div>


    </div>
  )
}

export default ShimmerUI;