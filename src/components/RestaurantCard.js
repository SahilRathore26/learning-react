import { CDN_URL } from "../utility/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, sla } = resData?.info;
  const { deliveryTime } = sla;
  return (
    <div className="res-card">
      <img className="res-card-image" src={ CDN_URL + resData.info.cloudinaryImageId} 
      alt="card-img"></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{deliveryTime} min</h5>
    </div>
  );
};

export default RestaurantCard;