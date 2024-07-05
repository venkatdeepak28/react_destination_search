// Write your code here
import './index.css'

const DestinationProfile = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails
  return (
    <li className="list-item">
      <div>
        <img src={imgUrl} className="img" alt={name} />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default DestinationProfile
