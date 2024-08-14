import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="slider-item">
      {/* <img src={thumbnailUrl} alt="action movie" className="thumbnail" /> */}
      <Popup
        modal
        trigger={
          <button type="button" className="thumbnail-btn">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-content-container">
            <div className="close-button-container">
              <button
                type="button"
                className="close-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                {' '}
                <IoMdClose />
              </button>
            </div>
            <div className="video-player-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
