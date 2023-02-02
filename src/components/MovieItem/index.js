// Write your code here
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import './index.css'

const MovieItem = props => {
  const {moviesDetails} = props
  const {thumbnailUrl, videoUrl} = moviesDetails
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <div>
            <button type="button" className="thumbnail-btn">
              <img
                src={thumbnailUrl}
                alt="thumbnail"
                className="thumbnail-box"
              />
            </button>
          </div>
        }
      >
        {close => (
          <div className="model-box">
            <div className="close-btn-container">
              <button
                type="button"
                className="icon-close"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose className="icon" />
              </button>
            </div>
            <div className="react-video-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
