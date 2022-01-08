import React from 'react';
import Movie from './Movie';

class Movies extends React.Component {
    render() {
      // console.log(this.props);
      const { movies, search } = this.props;
      let filterMovies = movies.
      filter(movie => movie.title.toLowerCase().
                      includes(search.toLowerCase()));
      return(
        <section id="movies">
          {
            filterMovies.map(movie => <Movie movie={movie}/>)
          }
        </section>
      )
    }
  }
  export default Movies;