import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="bg-container">
      <div className="banner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="banner"
        />
      </div>
      <div className="sliders-container">
        <div className="slider-container">
          <h1 className="heading">Action Movies</h1>
          <MoviesSlider
            data={moviesList.filter(
              eachMovie => eachMovie.categoryId === 'ACTION',
            )}
          />
        </div>
        <div className="slider-container">
          <h1 className="heading">Comedy Movies</h1>
          <MoviesSlider
            data={moviesList.filter(
              eachMovie => eachMovie.categoryId === 'COMEDY',
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
