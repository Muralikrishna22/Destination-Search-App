import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toUpperCase().includes(searchInput.toUpperCase()),
    )
    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="destination-heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeInput}
              placeholder="search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="input-img"
            />
          </div>

          <ul className="destination-list">
            {searchResults.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
