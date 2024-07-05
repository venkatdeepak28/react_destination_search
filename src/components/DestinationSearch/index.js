// Write your code here
import {Component} from 'react'
import DestinationProfile from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchValue: ''}

  changeValue = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {searchValue} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachValue => {
      const lowerCase = eachValue.name.toLowerCase()
      return lowerCase.includes(searchValue)
    })
    return (
      <div className="bg-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="input-container">
          <input
            className="input-box"
            type="Search"
            onChange={this.changeValue}
            value={searchValue}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="logo"
          />
        </div>
        <ul>
          <div className="list-prop">
            {searchResult.map(eachUser => (
              <DestinationProfile userDetails={eachUser} key={eachUser.id} />
            ))}
          </div>
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
