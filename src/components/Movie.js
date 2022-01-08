import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(0, 0, 0, .8)'
    },
    content : {
      position                   : 'absolute',
      top                        : '40px',
      left                       : '100px',
      right                      : '100px',
      bottom                     : 'auto',
      background                 : '#fff',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '0px',
      outline                    : 'none',
    }
  
  };

const text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

class Movie extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showModal: false
      }
    }
    
    openModal = () => {
      this.setState({showModal: true})
    }
      
    closeModal = () => {
      this.setState({showModal: false})
    }
    
    render() {
      const { showModal } = this.state;
      const { movie } = this.props;
      
      return (
        <div>
        <figure onClick={this.openModal}>
          <img src={movie.poster}/>
          <figcaption>
            <h5>{text_truncate(movie.title, 26)}</h5>
            <p>{movie.genre.join(', ')}</p>
            <div className="rating">
              <i className="fa fa-heart"></i>
              <h4>{movie.rating}</h4>
            </div>
          </figcaption>
        </figure>
         
        <Modal showModal={showModal} closeModal={this.closeModal} movie={movie} />
        
        </div>
      )
    }
  }

  const Modal = ({ showModal, closeModal, movie  }) => (
    <ReactModal
      className="modal"
      isOpen={showModal}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      >
      <p onClick={closeModal} className="close-modal">X</p>
      <img src={movie.poster} alt={movie.title} />
          <div>
            <div className="modal-movie-title">
              <h1>{movie.title}</h1>
              <div className="modal-genre">
                <p className="genre">{movie.genre.join(', ')}</p>
                <span className="rated">{movie.rated}</span>
                <span className="duration">{movie.duration}</span>
              </div>
              <div className="movie-numbers">
                <div className="modal-rating">
                  <div>
                    <i className="fa fa-heart"></i>
                    <h4>{movie.rating}</h4>
                  </div>
                  <p>Rating</p>
                </div>
  
                <div className="score">
                  <div>
                    <i className={movie.score < 70 ? 'fa fa-thumbs-down' : 'fa fa-thumbs-up'}></i>
                    <h4>{movie.score}</h4>
                  </div>
                  <p>Score</p>
                </div>
  
                <div className="awards">
                  <div>
                    <i className="fa fa-trophy"></i>
                    <h4>{movie.awards}</h4>
                  </div>
                  <p>Awards</p>
                </div>
  
              </div>
            </div>
            <p className="movie-description">
            {movie.description}
            </p>
            <a href="#">full movie profile</a>
            <div className="modal-buttons">
              <button>watch trailer <i className="fa fa-caret-right"></i></button>
              <button>to watchlist <i className="fa fa-star"></i></button>
            </div>
          </div>
    </ReactModal>
  )

  
  export default Movie;