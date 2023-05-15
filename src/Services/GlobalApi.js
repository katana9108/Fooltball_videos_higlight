import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://free-football-soccer-videos.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '7ce3adc7aemshe82a8a8586a3de8p1fecadjsn5255c0ad09d2',
      'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    }
  };

  const response =  axios.request(options);
  const getVideoByUrl=(url)=>axios.request(options);
export default {
    response,
    getVideoByUrl
}