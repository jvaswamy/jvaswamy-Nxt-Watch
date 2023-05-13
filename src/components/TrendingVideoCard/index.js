import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import '../Home/index.css'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItem,
  VideothumbnailImg,
  VideoContentContainer,
  VideoProfileImg,
  VideoContentCart,
  VideoContentCart1,
  VideoTitle,
  VideoText,
  VideoContent2,
  DotContainer,
} from './styledComponents'

const HomeVideoCard = probs => {
  const {trendingVideoDetails} = probs
  const {
    thumbnailUrl,
    profileImageUrl,
    title,
    name,
    viewCount,
    publishedAt,
    id,
  } = trendingVideoDetails
  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtString = postedAt.split(' ')
  if (postedAtString.length === 3) {
    postedAtString.shift()
    postedAt = postedAtString.join(' ')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`videos/${id}`} className="link-item">
            <VideoItem>
              <VideothumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoContentContainer>
                <VideoProfileImg src={profileImageUrl} alt="channel logo" />
                <VideoContentCart>
                  <VideoTitle theme={isDarkTheme}>{title}</VideoTitle>

                  <VideoContentCart1 theme={isDarkTheme}>
                    <VideoText>
                      {name}
                      <DotContainer>
                        <BsDot />
                      </DotContainer>
                    </VideoText>
                    <VideoContent2 theme={isDarkTheme}>
                      <VideoText>{viewCount} Views</VideoText>
                      <BsDot />
                      <VideoText>{postedAt} ago</VideoText>
                    </VideoContent2>
                  </VideoContentCart1>
                </VideoContentCart>
              </VideoContentContainer>
            </VideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default HomeVideoCard
