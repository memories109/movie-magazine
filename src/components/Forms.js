import React from 'react';

class Forms extends React.Component {
    constructor(props) {
      super(props);
      this.updateSearch = this.updateSearch.bind(this);
    }
    
    updateSearch(newSearch) {
      this.props.updateSearch(newSearch)
    }
    
    render() {
      // console.log(this.props);
      const { search } = this.props;
      return(
        <div id="forms">
          
          <form id="range-form">
            <p>IMDb Rating</p>
            <div className="group">    
              <input id="range"
                type="range"
                min="6.0"
                max="8.3"
                step="0.1"
                value="6"
                />
              <p id="results">6</p>
          </div>
        </form>
  
        <div id="search-input">
          <input id="search"
            type="search"
            results="5"
            // placeholder="Search Movies..."
            value={search}
            onChange={this.updateSearch}
            />
          <i className="fa fa-search"></i>
        </div>
      </div>
      )
    }
  }

export default Forms;