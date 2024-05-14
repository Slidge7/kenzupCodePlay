import { categoriesList, placesData } from "../../../constants/localData";

const fetchPlaces = () => {
  return {
    type: 'FETCH_PLACES',
    payload: placesData
  };
};

const filterPlacesByCategory = (categoryId) => {
    console.log(categoryId)
    return {
      type: 'FILTER_PLACES_BY_CATEGORY',
      payload: categoryId,
    };
  };

const searchPlaces = (searchQuery) => {
    return {
      type: 'SEARCH_PLACES',
      payload: searchQuery,
    };
  };
  

const initialState = {
  placesList: [],
  categorie: categoriesList,
  selectedCategory:Number,
  selectedPlace: {},
  filtredResult:[],
  liked: [],
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLACE':
      return {
        ...state,
        placesList: [...state.placesList, action.payload],
      };
    case 'FETCH_PLACES':
      return {
        ...state,
        placesList: action.payload,
      };
      case 'FILTER_PLACES_BY_CATEGORY':
        return {
          ...state,
          filtredResult: state.placesList.filter(place => place.categoryId === action.payload),
          selectedCategory: action.payload,          
        };
        case 'SEARCH_PLACES':
          return {
            ...state,
            filtredResult: state.placesList.filter(place => 
              place.title.toLowerCase().includes(action.payload.toLowerCase())
            ),
          };
    
        case 'Reset':
          return {
            ...state,
            filtredResult: state.placesList.filter(place => 
              place.title.toLowerCase().includes(action.payload.toLowerCase())
            ),
          };
    
    default:
      return state;
  }
};

export { fetchPlaces, filterPlacesByCategory, searchPlaces };

export default placeReducer;
