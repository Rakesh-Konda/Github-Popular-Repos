// Write your code here
// import {AiFillStar, AiOutlineIssuesClose, AiOutlineFork} from 'react-icons/ai'

import './index.css'

const RepositoryItem = props => {
  const {list} = props
  return (
    <div className="j">
      <ul className="ul">
        {list.map(each => (
          <li key={each.id} className="ll">
            <div className="c">
              <div className="col">
                <img src={each.avatarUrl} className="logo" alt={each.name} />
                <h1 className="h1">{each.name}</h1>
              </div>
              <div className="jar">
                <img
                  className="i"
                  src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
                  alt="stars"
                />
                <p>{each.starsCount} stars</p>
              </div>
              <div className="jar">
                <img
                  className="i"
                  src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
                  alt="forks"
                />
                <p>{each.forksCount} forks</p>
              </div>
              <div className="jar">
                <img
                  className="i"
                  src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
                  alt="open issues"
                />
                <p>{each.issuesCount} issues</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepositoryItem
