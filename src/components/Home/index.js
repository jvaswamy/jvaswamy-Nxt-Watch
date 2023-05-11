import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {BiSearch} from 'react-icons/bi'
import HomeVideoCard from '../HomeVideoCard'

import Header from '../Header'
import SlideBar from '../SlideBar'

import {
  HomeContainer,
  HomeContent,
  LoaderContainer,
  SearchInputContainer,
  SearchInput,
  SearchBtn,
  VideoList,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
console.log(apiStatusConstant)
class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = ' https://apis.ccbp.in/videos/all?search='
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const responseData = await response.json()
      const updatedData = responseData.videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {videosList} = this.state
    return (
      <>
        <SearchInputContainer>
          <SearchInput type="search" placeholder="Search" />
          <SearchBtn>
            <BiSearch size="20" />
          </SearchBtn>
        </SearchInputContainer>
        <VideoList>
          {videosList.map(eachItem => (
            <HomeVideoCard key={eachItem.id} videosDetails={eachItem} />
          ))}
        </VideoList>
      </>
    )
  }

  renderAllVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      case apiStatusConstant.success:
        return this.renderVideosView()
      case apiStatusConstant.failure:
        return <h1>failure</h1>
      default:
        return null
    }
  }

  render() {
    const {videosList} = this.state
    console.log(videosList)
    return (
      <>
        <Header />
        <HomeContainer>
          <SlideBar />
          <HomeContent>{this.renderAllVideos()}</HomeContent>
        </HomeContainer>
      </>
    )
  }
}

export default Home
