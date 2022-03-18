import axios from 'axios';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './MoviePage.module.css'

const endPointUrl = "http://localhost:8888";


const MoviePage = () => {

  const [movieToFind, setMovieToFind] = useState("");
  const [movie, setMovie] = useState({});
  const [isMovieFound, setIsMovieFound] = useState(false);

  const getMovies = () => {
    setIsMovieFound(false);
    axios.post(endPointUrl + "/movies", {
      title: movieToFind
    }).then((response) => {
      if (response.status === 200) {
        setIsMovieFound(true);
        console.log(response.data);
        setMovie(response.data);
      } 
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return(
    <div className={styles.moviesPageContainer}>
      <div className={styles.moviesContentContainer}>
      
        <div className={styles.moviesInputContainer}>
          <h1>The Open Movie Database</h1>
          <input className={styles.moviesTextInput} type="text" placeholder="enter a movie" onChange={ (event) => setMovieToFind(event.target.value)} onKeyUp={ (event) => { if (event.key === "Enter") document.getElementById("search-movie-btn").click() }} />
          <input id="search-movie-btn" className={styles.searchMovieBtn} type="button" value="Search" onClick={() => getMovies()}/>
        </div>
        {isMovieFound ? 
        <Card style={{ width: '100%' }}>
          <Card.Img class="m-5" variant="top" src={movie.Poster}/>
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
            <div id="movie-output">
              <p><b>Actors: </b>{movie.Actors} </p>
              <p><b>Awards: </b>{movie.Awards} </p>
              <p><b>BoxOffice: </b>{movie.BoxOffice} </p>
              <p><b>Country: </b>{movie.Country} </p>
              <p><b>DVD: </b>{movie.DVD} </p>
              <p><b>Director: </b>{movie.Director} </p>
              <p><b>Genre: </b>{movie.Genre} </p>
              <p><b>Language: </b>{movie.Language} </p>
              <p><b>Metascore: </b>{movie.Metascore} </p>
              <p><b>Plot: </b>{movie.Plot} </p>
              <p><b>Production: </b>{movie.Production} </p>
              <p><b>Rated: </b>{movie.Rated} </p>
              <p><b>Ratings: </b></p>
              <ul>
                {movie.Ratings?.map(item => (
                  <div key={item.Source}>
                    <li><b>{item.Source}:</b> {item.Value}</li>
                  </div>          
                ))}
              </ul>
              <p><b>Released: </b>{movie.Released} </p>
              <p><b>Response: </b>{movie.Response} </p>
              <p><b>Runtime: </b>{movie.Runtime} </p>
              <p><b>Type: </b>{movie.Type} </p>
              <p><b>Website: </b>{movie.Website} </p>
              <p><b>Writer: </b>{movie.Writer} </p>
              <p><b>Year: </b>{movie.Year} </p>
              <p><b>imdbID: </b>{movie.imdbID} </p>
              <p><b>imdbRating: </b>{movie.imdbRating} </p>
              <p><b>imdbVotes: </b>{movie.imdbVotes} </p>
            </div>
            </Card.Text>
            {movie.Website != "N/A" ? <Button href={"//" + movie.Website} target="_blank" variant="primary">Check out the website</Button> : "" }
            
          </Card.Body>
        </Card>
        : ""
        }
      </div>
    </div>
  )
}

export default MoviePage;