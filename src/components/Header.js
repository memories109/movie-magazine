import React from 'react';
import Slider from "react-slick";


class Header extends React.Component {
    constructor() {
      super()
      this.state = {
        popularMovies: [
          {
            name: "the martian",
            genre: ["adventure", "sci-fi", "thriller"],
            releaseDate: "15 Oct, 2015 (USA)",
            img: "https://68.media.tumblr.com/37aa774749579b5a20e35fd40fc269e7/tumblr_ob7vuzk7qP1uwbmnzo4_1280.jpg"
          },
          {
            name: 'dredd',
            genre: ["action", "crime", "sci-fi"],
            releaseDate: "21 September, 2012 (USA)",
            img: "https://images.alphacoders.com/503/thumb-1920-503738.jpg"
          },
          {
            name: "alien: covenent",
            genre: ["horror", "sci-fi", "thriller"],
            releaseDate: "19 May, 2017 (USA)",
            img: "https://www.slashfilm.com/wp/wp-content/images/Alien-Covenant-Trailer-Breakdown-59.jpg"
          },
          {
            name: "godzilla",
            genre: ["action", "adventure", "sci-fi"],
            releaseDate: "16 May, 2014 (USA)",
            img: "https://i.ytimg.com/vi/-ieuv_84nmc/maxresdefault.jpg"
          }
        ]
      }
    }
    render() {
      const { popularMovies } = this.state;
      const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 6500,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
      };
      return (
        <header>
          <Slider {...settings}>
            {
              popularMovies.map(m => (
                <div
                  key={m.name}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '600px'
                  }}
                  >
                  <img src={m.img} style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', verticalAlign: 'top' }}/>
                  <div className="movie-info" style={{zIndex: 2}}>
                    <h1>{m.name}</h1>
                    <ul className="genre">
                      { 
                        m.genre.map(g => (
                        <li>{g}</li>))
                      }
                    </ul>
                    <button>watch trailer <i className="fa fa-play-circle-o"></i></button>
          <h3>In theaters</h3>
          <h4>{m.releaseDate}</h4>
                  </div>
                </div>
              ))
            }
          </Slider>
        </header>
      )
    }
  }

  export default Header;