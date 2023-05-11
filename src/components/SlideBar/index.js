import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
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

const SlideBar = props => {
  console.log(props)

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <SlideBarContainer bgColor={isDarkTheme}>
            <RouteItemContainer>
              <Link to="/">
                <RouteContainer>
                  <AiFillHome
                    size="20"
                    color={isDarkTheme ? ' #424242' : '#7e858e'}
                  />
                  <RouteHeading>Home</RouteHeading>
                </RouteContainer>
              </Link>
              <Link to="/trending">
                <RouteContainer>
                  <AiFillFire size="20" />
                  <RouteHeading>Trending</RouteHeading>
                </RouteContainer>
              </Link>
              <Link to="/gaming">
                <RouteContainer>
                  <SiYoutubegaming size="20" />
                  <RouteHeading>Gaming</RouteHeading>
                </RouteContainer>
              </Link>
              <Link to="/saved-videos">
                <RouteContainer>
                  <BiListPlus size="20" />
                  <RouteHeading>Saved videos</RouteHeading>
                </RouteContainer>
              </Link>
            </RouteItemContainer>
            <ContactUsContainer>
              <ContactHeading>CONTACT US</ContactHeading>
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
              <ContactDescription>
                Enjoy! Now to see your channels and recommendations!
              </ContactDescription>
            </ContactUsContainer>
          </SlideBarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SlideBar
