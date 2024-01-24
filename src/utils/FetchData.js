
export const exercisesOptions = {
    method: 'GET',
    params: {limit: '50'},
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const youtubeOptions={
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host':'youtube-search-and-download.p.rapidapi.com'
  }

  };

  export const fetchData = async (url, options) => {
    const apiUrl = new URL(url);
    apiUrl.searchParams.set('limit', '50');

    const response = await fetch(apiUrl.toString(), options);
    const data = await response.json();
    return data;
  };