import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import '../Home/index.css'
import {
  SlideBarContainer,
  RouteItemContainer,
  RouteContainer,
  RouteHeading,
  ContactUsContainer,
  ContactHeading,
  ContactLogosContainer,
  ContactLogo,
  ContactDescription,
} from './styledComponents'

const SlideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SlideBarContainer bgColor={isDarkTheme}>
          <RouteItemContainer>
            <Link to="/" className="link-item">
              <RouteContainer>
                <AiFillHome size="20" color="#7e858e" />
                <RouteHeading theme={isDarkTheme}>Home</RouteHeading>
              </RouteContainer>
            </Link>
            <Link to="/trending" className="link-item">
              <RouteContainer>
                <AiFillFire size="20" color="#7e858e" />
                <RouteHeading theme={isDarkTheme}>Trending</RouteHeading>
              </RouteContainer>
            </Link>
            <Link to="/gaming" className="link-item">
              <RouteContainer>
                <SiYoutubegaming size="20" color="#7e858e" />
                <RouteHeading theme={isDarkTheme}>Gaming</RouteHeading>
              </RouteContainer>
            </Link>
            <Link to="/saved-videos" className="link-item">
              <RouteContainer>
                <BiListPlus size="20" color="#7e858e" />
                <RouteHeading theme={isDarkTheme}>Saved videos</RouteHeading>
              </RouteContainer>
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

export default SlideBar
