import React from 'react';
import  Forms  from './Forms';
import  Movies  from './Movies';

let movies = [
    {
      title: 'Mad Max: Fury Road',
      genre : ['Action', 'Adventure', 'Sci-Fi'],
      rating: 8.3,
      poster: 'https://s-media-cache-ak0.pinimg.com/originals/ce/0c/93/ce0c93d50ae68922d1f4f6667c95e1a8.jpg',
      description: 'A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.',
      duration: '2h',
      rated: 'r',
      score: 90,
      awards: 88
    },
    {
      title: 'The Hunger Games: Mockingjay Part 1',
      genre: ['Adventure', 'Sci-Fi', 'Thriller'],
      rating: 6.8,
      poster: 'https://1.bp.blogspot.com/-Ds0sudZmSq4/Vgxrr75E77I/AAAAAAAAREo/sZkZW5YMDTw/s1600/Mockingjay%2BPart%2B1.jpg',
      description: 'Katniss Everdeen is in District 13 after she shatters the games forever. Under the leadership of President Coin and the advice of her trusted friends, Katniss spreads her wings as she fights to save Peeta and a nation moved by her courage.',
      duration: '2h 3m',
      rated: 'pg-13',
      score: 64,
      awards: 8
    },
    {
      title: 'Jurassic World',
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      rating: 7.2,
      poster: 'https://s-media-cache-ak0.pinimg.com/736x/0b/ab/9a/0bab9a9c671dbb7aa8626eec44a0195f.jpg',
      description: 'A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, which escapes containment and goes on a killing spree.',
      duration: '2h 4m',
      rated: 'pg-13',
      score: 59,
      awards: 8
    },
    {
      title: 'Everest',
      genre: ['Adventure', 'Drame', 'Thriller'],
      rating: 7.4,
      poster: 'http://www.impawards.com/2015/posters/everest_ver4.jpg',
      description: 'The story of New Zealand\'s Robert "Rob" Edwin Hall, who on May 10, 1996, together with Scott Fischer, teamed up on a joint expedition to ascend Mount Everest.',
      duration: '2h 1m',
      rated: 'pg-13',
      score: 64,
      awards: 0
    },
    {
      title: 'Insurgent',
      genre: ['Adventure', 'Sci-Fi', 'Thriller'],
      rating: 6.4,
      poster: 'http://cdn2-www.comingsoon.net/assets/uploads/2015/01/FIN16_Insurgent_Guns_1Sht_Trim-1422379653-mtv-14224534611.jpg',
      description: 'Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart with the help from others on her side.',
      duration: '1h 59m',
      rated: 'pg-13',
      score: 42,
      awards: 3
    },
    {
      title: 'Sicario',
      genre: ['Action', 'Crime', 'Drama'],
      rating: 8,
      poster: 'https://s-media-cache-ak0.pinimg.com/564x/7f/a1/5c/7fa15c26aa2cb48562ea37bbc177be74.jpg',
      description: 'An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.',
      duration: '2h 1m',
      rated: 'r',
      score: 82,
      awards: 15
    }
  ];
const Tabs = () => (
<ul className="options">
    <li className="active">in theaters</li>
    <li>coming soon</li>
    <li>charts</li>
    <li>tv series</li>
    <li>trailers</li>
    <li>more</li>
</ul>
);


class Main extends React.Component {
    constructor(props) {
      super(props);
      this.updateSearch = this.updateSearch.bind(this);
      this.state = {
        movies: movies,
        search: ''
      }
    }
    updateSearch(e) {
      e.preventDefault();
      this.setState({
        search: e.target.value.substr(0, 26)
      })
    }
    render() {
      const { movies, search } = this.state;
      return(
        <main>
          <Tabs />
          <Forms search={search} updateSearch={this.updateSearch}/>
          <Movies movies={movies} search={search} />
        </main>
      )
    }
  }

export default Main;