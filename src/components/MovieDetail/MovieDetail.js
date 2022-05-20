import React, { useEffect } from 'react';
import "./MovieDetail.scss";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectMovieOrShow } from '../../features/movies/movieSlice';

const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectMovieOrShow);
    console.log(data);
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    },[dispatch, imdbID])
    return (
        <div className='movie-section'>
            <div className='section-left'>
                <div className='movie-title'>{data.Title}</div>
                <div className='movie-rating'>
                    <span>
                        IMDB avis <i className='fa fa-star'></i> : {data.imdbRating}
                    </span>

                    <span>
                        IMDB votes <i className='fa fa-thumbs-up'></i> : {data.imdbVotes}
                    </span>

                    <span>
                        Durée <i className='fa fa-film'></i> : {data.Runtime}
                    </span>

                    <span>
                        Année <i className='fa fa-calendar'></i> : {data.Year}
                    </span>
                </div>
                <div className='movie-plot'>{data.Plot}</div>
                <div className='movie-info'>
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>

                    <div>
                        <span>Acteurs</span>
                        <span>{data.Actors}</span>
                    </div>

                    <div>
                        <span>Genres</span>
                        <span>{data.Genre}</span>
                    </div>

                    <div>
                        <span>Langues</span>
                        <span>{data.Language}</span>
                    </div>

                    <div>
                        <span>Awards</span>
                        <span>{data.Awards}</span>
                    </div>
                </div>
            </div>
            <div className='section-right'>
                <img src={data.Poster} alt={data.Title} />
            </div>
        </div>
    );
};

export default MovieDetail;