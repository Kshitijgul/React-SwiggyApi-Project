import React from "react";
import ReactDOM from "react-dom";
import { CDN_URL } from '../utils/constant';

const Restaurantcard = (props) => {
    const { resData } = props;
    console.log(props);
    return (
      <div className="res-card">
        <img
          src={ CDN_URL
    +
            resData.info.cloudinaryImageId
          }
        />
        <h3>{resData.info.name}</h3>
        <h4 className="h4cuisines">{resData.info.cuisines.join(", ")} </h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.avgRating} Stars</h4>
        <h4>{resData.info.deliveryTime} Minutes </h4>
      </div>
    );
  };

  export default Restaurantcard;