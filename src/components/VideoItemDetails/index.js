import {formatDistanceToNow} from 'date-fns'
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import SlideBar from '../SlideBar'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsContent,
  LoaderContainer,
  VideoItemResponseContainer,
  VideoItemContentContainer,
  VideoItemDescription,
  VideoItemDetailsCart,
  ItemViewsDetailsContainer,
  ItemViews,
  ItemTime,
  ItemLikeAndSaveContainer,
  LikeButton,
  DisLikeButton,
  SaveButton,
  Text,
  Line,
  ItemProfileContainer,
  ItemProfileImg,
  ItemProfileContentContainer,
  Name,
  SubCont,
  Description,
  Description1,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videoDetails: {},
    isLike: false,
    isDisLike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const responseData = await response.json()
      const formatData = {
        name: responseData.video_details.channel.name,
        profileImageUrl: responseData.video_details.channel.profile_image_url,
        subscriberCount: responseData.video_details.channel.subscriber_count,
        description: responseData.video_details.description,
        id: responseData.video_details.id,
        publishedAt: responseData.video_details.published_at,
        thumbnailUrl: responseData.video_details.thumbnail_url,
        title: responseData.video_details.title,
        videoUrl: responseData.video_details.video_url,
        viewCount: responseData.video_details.view_count,
      }
      this.setState({
        apiStatus: apiStatusConstant.success,
        videoDetails: formatData,
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

  onLike = () => {
    this.setState(preState => ({isLike: !preState.isLike, isDisLike: false}))
  }

  onDisLike = () => {
    this.setState(preState => ({isDisLike: !preState.isDisLike, isLike: false}))
  }

  renderVideoItemView = () => {
    const {videoDetails, isLike, isDisLike} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      name,
      subscriberCount,
      description,
    } = videoDetails
    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtString = postedAt.split(' ')
    if (postedAtString.length === 3) {
      postedAtString.shift()
      postedAt = postedAtString.join(' ')
    }

    return (
      <VideoItemResponseContainer>
        <ReactPlayer url={videoUrl} width="100%" />
        <VideoItemContentContainer>
          <VideoItemDescription>{title}</VideoItemDescription>
          <VideoItemDetailsCart>
            <ItemViewsDetailsContainer>
              <ItemViews>{viewCount} views</ItemViews>
              <BsDot />
              <ItemTime>{postedAt} ago</ItemTime>
            </ItemViewsDetailsContainer>
            <ItemLikeAndSaveContainer>
              <LikeButton type="button" onClick={this.onLike} isLike={isLike}>
                <AiOutlineLike size={25} />
                <Text>Like</Text>
              </LikeButton>
              <DisLikeButton
                type="button"
                onClick={this.onDisLike}
                isDisLike={isDisLike}
              >
                <AiOutlineDislike size={25} />
                <Text>DisLike</Text>
              </DisLikeButton>
              <SaveButton type="button">
                <BiListPlus size={25} />
                <Text>Save</Text>
              </SaveButton>
            </ItemLikeAndSaveContainer>
          </VideoItemDetailsCart>
          <Line />
          <ItemProfileContainer>
            <ItemProfileImg src={profileImageUrl} alt="channel logo" />
            <ItemProfileContentContainer>
              <Name>{name}</Name>
              <SubCont>{subscriberCount} subscribers</SubCont>
              <Description>{description}</Description>
            </ItemProfileContentContainer>
          </ItemProfileContainer>
          <Description1>{description}</Description1>
        </VideoItemContentContainer>
      </VideoItemResponseContainer>
    )
  }

  renderAllVideoItemDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      case apiStatusConstant.success:
        return this.renderVideoItemView()
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
        <VideoItemDetailsContainer>
          <SlideBar />
          <VideoItemDetailsContent>
            {this.renderAllVideoItemDetails()}
          </VideoItemDetailsContent>
        </VideoItemDetailsContainer>
      </>
    )
  }
}

export default VideoItemDetails
