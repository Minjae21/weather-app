import React from 'react'

const TopButton = ({setQuery}) => {

  const cities = [
    {
      id: 1,
      name: "New York"
    },
    {
      id: 2,
      name: "San Francisco"
    },
    {
      id: 3,
      name: "Chicago"
    },
    {
      id: 4,
      name: "London"
    },
    {
      id: 5,
      name: "Paris"
    }
  ]

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in text-white'
        onClick = {() => setQuery({ q: city.name })}>
          {city.name}
        </button>  
      ))}
    </div>
  );
};

export default TopButton
