// Write your code here
import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  constructor(props) {
    super(props)
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(item => item.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(item => item.categoryId === 'COMEDY')

    this.state = {
      actionMoviesList: actionMovies,
      comedyMoviesList: comedyMovies,
    }
  }

  render() {
    const {actionMoviesList, comedyMoviesList} = this.state
    console.log(actionMoviesList, comedyMoviesList)

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-banner"
        />
        <div className="movies-container">
          <h1 className="heading">Action Movies</h1>
          <MoviesSlider
            key={actionMoviesList.categoryId}
            moviesData={actionMoviesList}
          />

          <h1 className="heading">Comedy Movies</h1>
          <MoviesSlider
            key={comedyMoviesList.categoryId}
            moviesData={comedyMoviesList}
          />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
