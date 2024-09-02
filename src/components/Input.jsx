import { BiSearch, BiCurrentLocation } from "react-icons/bi"

const Input = () => {
  return (
    <div className='flex flex-row jiustify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type = "text" placeholder = "Search..."
            className='text-gray-500 text-xl font-light p-2 w-full shawdow-xl capitalize focus:outline-none placeholder:lowercase'/>

        <BiSearch
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125 text-white" />
        <BiCurrentLocation
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125 text-white" />
        
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button className="text-2xl font-medium transition ease-out hover:scale-125 text-white">
            °C
            </button>
            <p className="text-2xl font-medium mx-1 text-white">|</p>
            <button className="text-2xl font-medium transition ease-out hover:scale-125 text-white">
            °F
            </button>
        </div>
    </div>
  )
}

export default Input
