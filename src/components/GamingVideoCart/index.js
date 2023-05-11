// import {Component} from 'react'
import {Link} from 'react-router-dom'
import '../Home/index.css'
import {
  GamingVideoItem,
  GamingThumblai,
  GamingVideoContent,
  GamingTitle,
  GamingViews,
} from './styledComponents'

const GamingVideoCart = props => {
  const {gamingVideoDetails} = props
  const {thumbnailUrl, title, viewCount, id} = gamingVideoDetails

  return (
    <GamingVideoItem>
      <Link to={`videos/${id}`} className="link-item">
        <GamingThumblai src={thumbnailUrl} alt="video thumbnail" />
        <GamingVideoContent>
          <GamingTitle>{title}</GamingTitle>
          <GamingViews>{viewCount} Watching WorldWide</GamingViews>
        </GamingVideoContent>
      </Link>
    </GamingVideoItem>
  )
}

export default GamingVideoCart
