import React, { useState, useEffect } from 'react';
import './movieScreen.css';
import NavBar from '../navigation/NavBar';
import { movieImage } from '../ImageUrl';

const MovieScreen = () => {

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    const URL = 'https://dummyapi.online/api/movies';


    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
            console.log(data)
            setMovies(data);
            setFilteredMovies(data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filtered = movies.filter(movie =>
            movie.movie.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMovies(filtered);
    }

    return (
        <>
            <section>
                <NavBar />
                <div className="headBar">
                    <h2>Movies</h2>
                    <input
                        type="text"
                        className='srh'
                        placeholder="Search movies..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <img src='./Trolls' alt="" />
                {filteredMovies.length === 0 ? (
                    movies.length === 0 ? (<p>Loading...</p>) : (<p>No result found</p>)
                )
                    : (
                        <ul className="movies-list">
                            {filteredMovies.map((movie) => (
                                <li key={movie.id} className="movie-item">

                                    <div className="card">
                                        <img src={movieImage[movie.movie]} className="background-image" alt={`${movie.movie} Image`} />
                                        <div className='bgGrad'></div>
                                        <div className="content">
                                            <h2 className="title">{movie.movie}</h2>
                                            <p className="rating">Rating: {movie.rating}</p>
                                            <div className="description">
                                                {/* <p className="description">Description</p> */}
                                                <a href={movie.imdb_url} className="movie-imdb-link" target="_blank" rel="noopener noreferrer">IMDb</a>
                                            </div>
                                        </div>
                                    </div>




                                </li>
                            ))}
                        </ul>
                    )
                    // <p>{filteredMovies === 0 ? 'No result found..' : 'Loading...'}</p>
                }

            </section>


            {/* <img src='logo512.png' alt={movie.movie} className="movie-image" />
                            <div className="movie-details">
                                <h3 className="movie-title">{movie.movie}</h3>
                                <p className="movie-rating">Rating: {movie.rating}</p>
                                <a href={movie.imdb_url} className="movie-imdb-link" target="_blank" rel="noopener noreferrer">IMDb</a>
                            </div> */}
        </>


    );
};


export default MovieScreen
