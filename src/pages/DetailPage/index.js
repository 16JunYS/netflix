import axios from "../../api/axios";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import "./DetailPage.css"

export default function DetailPage() {
    let { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`
        );
        setMovie(request.data);
        console.log(request.data)
    }
      fetchData();
    }, [movieId]);

    if (!movie) return <div>...loading</div>;

    return (
        <section className="detail__content">
            <img
                className="modal__poster-img"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="poster"
            />
            <h2 className="detail__title">{movie.title ? movie.title : ""}</h2>
            <p className="detail__overview"> 평점: {movie.vote_average}</p>
            <p className="detail__overview"> {movie.overview}</p>
        </section>
    );
}
