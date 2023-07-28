import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import '../Home/index.css'
import {
  SlideBarContainer,
  RouteItemContainer,
  HomeRouteContainer,
  RouteHeading,
  ContactUsContainer,
  ContactHeading,
  ContactLogosContainer,
  ContactLogo,
  ContactDescription,
  TrendingRouteContainer,
  GamingRouteContainer,
  SaveVideoRouteContainer,
} from './styledComponents'

class SlideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, activeStatus, onChangeActive} = value
          const activeColor1 = activeStatus === 'HOME' ? '#ff0000' : '#7e858e'
          const activeColor2 =
            activeStatus === 'TRENDING' ? '#ff0000' : '#7e858e'
          const activeColor3 = activeStatus === 'GAMING' ? '#ff0000' : '#7e858e'
          const activeColor4 =
            activeStatus === 'SAVEITEM' ? '#ff0000' : '#7e858e'

          return (
            <SlideBarContainer bgColor={isDarkTheme}>
              <RouteItemContainer>
                <Link to="/" className="link-item">
                  <HomeRouteContainer
                    onClick={() => onChangeActive('HOME')}
                    activeItem={activeStatus}
                    theme={isDarkTheme}
                  >
                    <AiFillHome size="20" color={activeColor1} />
                    <RouteHeading theme={isDarkTheme}>Home</RouteHeading>
                  </HomeRouteContainer>
                </Link>
                <Link to="/trending" className="link-item">
                  <TrendingRouteContainer
                    onClick={() => onChangeActive('TRENDING')}
                    activeItem={activeStatus}
                    theme={isDarkTheme}
                  >
                    <AiFillFire size="20" color={activeColor2} />
                    <RouteHeading theme={isDarkTheme}>Trending</RouteHeading>
                  </TrendingRouteContainer>
                </Link>
                <Link to="/gaming" className="link-item">
                  <GamingRouteContainer
                    onClick={() => onChangeActive('GAMING')}
                    activeItem={activeStatus}
                    theme={isDarkTheme}
                  >
                    <SiYoutubegaming size="20" color={activeColor3} />
                    <RouteHeading theme={isDarkTheme}>Gaming</RouteHeading>
                  </GamingRouteContainer>
                </Link>
                <Link to="/saved-videos" className="link-item">
                  <SaveVideoRouteContainer
                    onClick={() => onChangeActive('SAVEITEM')}
                    activeItem={activeStatus}
                    theme={isDarkTheme}
                  >
                    <BiListPlus size="20" color={activeColor4} />
                    <RouteHeading theme={isDarkTheme}>
                      Saved videos
                    </RouteHeading>
                  </SaveVideoRouteContainer>
                </Link>
              </RouteItemContainer>
              <ContactUsContainer>
                <ContactHeading theme={isDarkTheme}>CONTACT US</ContactHeading>
                <ContactLogosContainer>
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactLogosContainer>
                <ContactDescription theme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactDescription>
              </ContactUsContainer>
            </SlideBarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SlideBar
