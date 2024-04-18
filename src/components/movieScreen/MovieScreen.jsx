import React, { useState, useEffect } from 'react';
import './movieScreen.css';
import NavBar from '../navigation/NavBar';
// import {AClockworkOrange,Alien,Amélie,ApocalypseNow,Arrival,AvengersEndgame,AvengersInfinityWar,BlackPanther,BladeRunner2049,Brooklyn,Coco,Deadpool2,DoctorStrange,Drive,Dunkirk,EternalSunshineoftheSpotlessMind,FantasticBeastsandWheretoFindThem,Fences,FightClub,FindingDory,FordvFerrari,ForrestGump,FrozenII,Gladiator,GuardiansoftheGalaxy,HacksawRidge,HellorHighWater,Her,HiddenFigures,Inception,InglouriousBasterds,Interstellar,JojoRabbit,Joker,JumanjiWelcometotheJungle,JurassicPark,KnivesOut,KuboandtheTwoStrings,LaLaLand,Lion,LittleWomen,Logan,Lordofrings,MadMadFuryRoad,manchesterbytheSea,MarriageStory,Moana,Moonlight,NoCountryforOldMen,OnceUponaTimeinHollywood,PansLabyrinth,Parasite,pulpfiction,RequiemforaDream,RougeOneAStarWarsStory,Room,SavingPrivateRyan,SchindlersList,Sing,Spotlight,Trolls} from '../ImageUrl.js'

import { movieImage } from '../ImageUrl';
const MovieScreen = () => {
    const [movies, setMovies] = useState([]);
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
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <>
            <section>
                <NavBar />
                <h2>Movies</h2>
                <img src='./Trolls' alt="" />
                {movies.length > 0 ? (
                    <ul className="movies-list">
                        {movies.map((movie) => (
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
                ) : (
                    <p>Loading...</p>
                )}

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
