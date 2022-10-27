export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

const fetchAPI = async (dispatch) => {
  try {
    dispatch(requestAPI());
    const response = await fetch('https://aws.random.cat/meow');
    const cat = await response.json();
    dispatch(getPicture(cat));
  } catch (error) {
    console.log('erro!');
  }
};

export const actionFetchAPI = () => fetchAPI;
