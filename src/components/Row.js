import React, {useState, useEffect} from "react";
import axios from "../api/axios";
import "./Row.css";
import MovieModal from "./MovieModal";

const Row = ({ isLargeRow, id, title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelection] = useState({});
    
    useEffect(() => {
        fetchMovieData();
    },);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
    }
    
    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelection(movie);
    }

    return (
        <section className="row">
            <h2>{title}</h2>
            <div className="slider">
                <div
                    className="slider__arrow-left"
                    onClick={() => {
                        document.getElementById(id).scrollLeft -= window.innerWidth - 80;
                    }}
                >
                    <span className="arrow">{"<"}</span>
                </div>
                <div id={id} className="row__posters">
                    {movies.map(movie => (
                        <img
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            loading="lazy"
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        >
                        </img>
                    ))}
                </div>
                <div 
                    className="slider__arrow-right"
                    onClick={() => {
                        document.getElementById(id).scrollLeft += window.innerWidth - 80;
                    }}>
                        <span className="arrow">{">"}</span>
                </div>
            </div>
            {modalOpen && (
                <MovieModal
                    {...movieSelected}    
                    setModalOpen={setModalOpen}                
                >
                </MovieModal>
            )}
        </section>
    );
}

export default Row;  