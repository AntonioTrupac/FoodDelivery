import React from "react";

type Props = {
    name?: string;
    rating?: string;
    deliveryTime?: string;
}

export const RestaurantInfo = ({name, rating, deliveryTime}: Props) => {
    return (
        <div className='imageContainer__left'>
            <h1>{name}</h1>

            <div className='paragraphContainer'>
                <p>
                    The average delivery time is: {deliveryTime}
                </p>

                <div className='dot'>&nbsp;&nbsp;•&nbsp;&nbsp;</div>
                <p>{rating}</p>
            </div>
        </div>
    )
}
