import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import GamingVideoCart from '../GamingVideoCart'
import Header from '../Header'
import SlideBar from '../SlideBar'
import {
  GamingContainer,
  GamingContent,
  LoaderContainer,
  GamingBanner,
  BannerLogoContainer,
  BannerHeading,
  GamingVideoList,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstant.initial, gameVideoList: []}

  componentDidMount() {
    this.getAllGameVideos()
  }

  getAllGameVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gameVideoList: updatedData,
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

  renderGamingView = () => {
    const {gameVideoList} = this.state

    return (
      <>
        <GamingBanner>
          <BannerLogoContainer>
            <SiYoutubegaming size={35} color="#ff0000" />
          </BannerLogoContainer>
          <BannerHeading>Gaming</BannerHeading>
        </GamingBanner>
        <GamingVideoList>
          {gameVideoList.map(eachItem => (
            <GamingVideoCart gamingVideoDetails={eachItem} key={eachItem.id} />
          ))}
        </GamingVideoList>
      </>
    )
  }

  renderAllGamingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      case apiStatusConstant.success:
        return this.renderGamingView()
      case apiStatusConstant.failure:
        return <h1>failure</h1>
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <GamingContainer>
          <SlideBar />
          <GamingContent>{this.renderAllGamingVideos()}</GamingContent>
        </GamingContainer>
      </>
    )
  }
}

export default Gaming
