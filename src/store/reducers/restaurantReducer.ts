import { RestaurantState } from "../type";
import { RestaurantActionTypes } from "../actions/restaurantActions";
import images from "../../images/download-(1).jpeg";
import images2 from "../../images/download.jpeg";
import images3 from "../../images/download(2).jpeg";
import images4 from "../../images/download(3).jpeg";

const initialState: RestaurantState = [
  {
    id: 1,
    name: "Restaurant 1",
    description: "This is the first restaurant",
    image: images,
  },
  {
    id: 2,
    name: "Restaurant 2",
    description: "This is the second restaurant",
    image: images2,
  },
  {
    id: 3,
    name: "Restaurant 2",
    description: "This is the second restaurant",
    image: images3,
  },
  {
    id: 4,
    name: "Restaurant 2",
    description: "This is the second restaurant",
    image: images4,
  },
];

const restaurantReducer = (
  state = initialState,
  action: RestaurantActionTypes
): RestaurantState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default restaurantReducer;
