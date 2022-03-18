import axios from 'axios';

const endPointUrl = "http://localhost:8888";
const MoviePage = () => {

  const getMovies = () => {
    console.log("movieiesi");
    axios.get(endPointUrl + "/movies").then((response) => console.log(response));
  }

  return(
    <div>
      Moviess
      <input type="button" value="get moviesss" onClick={() => getMovies()}/>
    </div>
  )
}

export default MoviePage;