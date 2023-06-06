import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    list: [],
    queryParams: languageFiltersData[0].id,
    loading: true,
    gro: true,
  }

  componentDidMount() {
    this.getItems()
  }

  getItems = async () => {
    const {queryParams} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${queryParams}`
    const response = await fetch(url)
    const data = await response.json()

    const updatedData = data.popular_repos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      issuesCount: each.issues_count,
      id: each.id,
      name: each.name,
      starsCount: each.stars_count,
    }))
    console.log(updatedData)
    this.setState({list: updatedData, loading: false})
  }

  changingItems = id => {
    console.log(id)
    this.setState({queryParams: id, loading: true}, this.getItems)
  }

  render() {
    const {list, loading, go} = this.state
    return (
      <div className="cen">
        <h1>Popular</h1>
        <LanguageFilterItem
          languageFiltersData={languageFiltersData}
          changingItems={this.changingItems}
        />
        {loading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <RepositoryItem list={list} />
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
