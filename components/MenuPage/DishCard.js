import React from 'react'

const DishCard = ({ dishName, dishImg, dishPrice }) => {
    return (
        <div className="w-1/2 h-[300px] shadow-sm">
            <img
                className="w-[90%] mx-auto"
                src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
            <h1 className="ml-3 mt-3 text-[18px] leading-6 font-bold">{dishName}</h1>
            <p className='ml-3 mt-3'>15.000vnd</p>
        </div>
    )
}

export default DishCard
