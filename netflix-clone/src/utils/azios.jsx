import axios from "axios"

const Instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default Instance;

// AXIOS 
// axios is alternative to fetch() function for making HTTP requests(get,post) to the server
// automatically transform the fetched data to json
// to define the base url