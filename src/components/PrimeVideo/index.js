import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-logo"
      />
      <div className="movies-container">
        <h1 className="action-heading">Action Movies</h1>
        <div className="action-slider-container">
          <MoviesSlider moviesList={actionMovies} />
        </div>

        <h1 className="comedy-heading">Comedy Movies</h1>
        <div className="comedy-slider-container">
          <MoviesSlider moviesList={comedyMovies} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
