import axios from "../../api/axios";
import { React, useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import "./SearchPage.css";
import { useDebounce } from "../../hooks/useDebounce";

export default function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    let query = useQuery();
    // const searchTerm = query.get("q");
    const debounceSearchTerm = useDebounce(query.get("q"), 500);

    useEffect(() => {
        if (debounceSearchTerm) {
            fetchSearchMovie(debounceSearchTerm);
        }
    }, [debounceSearchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
        try { 
            const request = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
            );
            setSearchResults(request.data.results); 
        } catch (error) {
            console.log("error", error);
        }
    }

    const renderSearchResults = () => {
        return searchResults.length > 0 ? (
            <section className="search-container">
                {searchResults.map((movie) => {
                    if (movie.backdrop_path != null && movie.media_type !== "person") {
                        const movieImageUrl =
                            "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
                        return (
                            <div className="movie">
                                <div className="movie__column-poster">
                                    <img src={movieImageUrl} alt="" className="movie__poster"></img>
                                </div>
                            </div>
                        )
                    }
                })}
            </section>
        ) : (
        <section className="no-results">
            <div className="no-results__text">
              <p>
                Your search for "{debounceSearchTerm}" did not have any match
                </p>
            </div>
          </section>
        );
    }

    return renderSearchResults();
}


