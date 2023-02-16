import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  // console.log(movieDetails)

  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />}
      className="popup-content"
    >
      {close => (
        <div className="popup-container">
          <button
            type="button"
            className="trigger-button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="close-icon" />
          </button>

          <ReactPlayer url={videoUrl} controls="true" />
        </div>
      )}
    </Popup>
  )
}
export default MovieItem
