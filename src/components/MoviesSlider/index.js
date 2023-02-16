import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  // console.log(moviesList)
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
  }

  return (
    <Slider {...settings}>
      {moviesList.map(eachMovie => (
        <MovieItem movieDetails={eachMovie} key={eachMovie.id} />
      ))}
    </Slider>
  )
}
export default MoviesSlider
