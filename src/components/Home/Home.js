import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {
  const movieText = 'Harry'
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log('error is ', err);
        })

      dispatch(addMovies(response.data))
    }

    fetchMovies()
  }, [dispatch])

  return (
    <div>
      <div className='banner-img'>Home</div>
      <MovieListing />
    </div>
  )
}

export default Home