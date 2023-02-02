// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'
import './index.css'

const MoviesSlider = props => {
  const {moviesData} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="main-container">
      <h1>Action Movies</h1>
      <Slider {...settings}>
        {moviesData.map(items => (
          <MovieItem key={items.id} moviesDetails={items} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
