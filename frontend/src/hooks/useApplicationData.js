import { useReducer, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();





const initialState = {
  userData: [],
  listingData: [],
  photoData: [],
  eventData: [],
  email: "",
  password: "",
  searchQuery: "",
  description: "",
  eventName: "",
  eventStart: "",
  eventEnd: "",
  adminPage: "Posts",
  postDescription: "",
  postName: "",
  postPhoto: "",
  login: "",
  weather: [],
  galleries: [],
  posts: [],
  gallerystate:"",
  modalPhoto: null
};

const ACTIONS = {
  
  SET_MODAL_PHOTO: "SET_MODAL_PHOTO",
  CLOSE_MODAL_PHOTO: "CLOSE_MODAL_PHOTO",
 
};

const reducer = (state, action) => {
  switch (action.type) {
      case ACTIONS.SET_MODAL_PHOTO:
      return { ...state, modalPhoto: action.payload };
      case ACTIONS.CLOSE_MODAL_PHOTO:
      return { ...state, modalPhoto: null };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/users'); 
        dispatch({ type: ACTIONS.SET_USER_DATA, payload: response.data });
      } catch (error) {
        // Handle error
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData(); // Call fetchUserData function
  }, []);


  useEffect(() => {
    
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get('/galleries'); 
        dispatch({ type: ACTIONS.SET_GALLERY_STATE, payload: response.data });
        console.log(response)
      } catch (error) {
        // Handle error
        console.error('Error fetching gallery data:', error);
      }
    };

    fetchGalleryData(); // Call fetchUserData function
  }, []);
  

  useEffect(() => {
    
    const fetchListingData = async () => {
      try {
        const response = await axios.get('/listings'); 
        dispatch({ type: ACTIONS.SET_LISTING_DATA, payload: response.data });
      } catch (error) {
        // Handle error
        console.error('Error fetching Listing data:', error);
      }
    };

    fetchListingData(); // Call fetchUserData function
  }, []);

  useEffect(() => {
    
    const fetchPhotoData = async () => {
      try {
        const response = await axios.get('/photos'); 
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      } catch (error) {
        // Handle error
        console.error('Error fetching Photo data:', error);
      }
    };

    fetchPhotoData(); // Call fetchUserData function
  }, []);

  useEffect(() => {
    
    const fetchEventData = async () => {
      try {
        const response = await axios.get('/events'); 
        dispatch({ type: ACTIONS.SET_EVENT_DATA, payload: response.data });
      } catch (error) {
        // Handle error
        console.error('Error fetching Event data:', error);
      }
    };

    fetchEventData(); // Call fetchUserData function
  }, []);


  useEffect(() => {
    
    const fetchPostData = async () => {
      try {
        const response = await axios.get('/posts'); 
        dispatch({ type: ACTIONS.SET_POSTS_DATA, payload: response.data });
      } catch (error) {
        // Handle error
        console.error('Error fetching Event data:', error);
      }
    };

    fetchPostData(); // Call fetchUserData function
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
       
        await axios.post('/api/weather');
          
          setTimeout(async () => {
            const response = await axios.get('/api/weatherupdated');
            dispatch({ type: 'SET_WEATHER_DATA', payload: response.data });
            // Store the fetched data in state
          }, 1000);
        
      } catch (error) {
        // Handle error
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData(); // Call the fetchWeatherData function
  }, []);




  const closeModalPhoto = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL_PHOTO });
  };

  const setModalPhoto = (photo) => {
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO, payload: photo });
    console.log("photo",photo)
  };
  
  

  return {
    dispatch,
    state,
    
    closeModalPhoto,
    setModalPhoto,

  };
};

export default useApplicationData;
