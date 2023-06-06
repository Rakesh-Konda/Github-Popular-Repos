// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, changingItems} = props

  const doChange = id => {
    changingItems(id)
  }

  return (
    <div>
      <ul className="ul">
        {languageFiltersData.map(each => (
          <li key={each.id}>
            <button
              type="button"
              className="but"
              onClick={() => doChange(each.id)}
            >
              {each.language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default LanguageFilterItem
