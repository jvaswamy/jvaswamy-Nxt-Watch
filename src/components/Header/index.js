import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiMoon} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
import '../Home/index'

import {
  NavHeader,
  NavContent,
  WebsiteLogo,
  MobileNavBar,
  NavItems,
  LogOutBtn,
  ModelContainer,
  ModelHeading,
  ModelCancelBtn,
  ModelConfirmBtn,
  MoonBtn,
  DestopNavBar,
  DestopButton,
  ProfileImg,
  ModelButtonContainer,
  HumBtn,
  HumContainer,
  HumListContainer,
  HumItem,
} from './styledComponents'

class Header extends Component {
  state = {isHumBtn: false}

  onClickConfirm = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onClickHum = () => {
    this.setState(preState => ({isHumBtn: !preState.isHumBtn}))
  }

  render() {
    const {isHumBtn} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const onToggle = () => {
            toggleTheme()
          }

          const websiteLogoTheme = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const theme = isDarkTheme ? '#181818' : '#ffffff'
          const color = isDarkTheme ? '#ffffff' : '#181818'

          return (
            <>
              <NavHeader theme={theme}>
                <NavContent>
                  <MobileNavBar>
                    <Link to="/">
                      <WebsiteLogo src={websiteLogoTheme} alt="website logo" />
                    </Link>
                    <NavItems>
                      <MoonBtn
                        onClick={onToggle}
                        type="button"
                        data-testid="theme"
                      >
                        {isDarkTheme ? (
                          <BsBrightnessHigh size={25} color={color} />
                        ) : (
                          <HiMoon size={25} />
                        )}
                      </MoonBtn>
                      <HumBtn type="button" onClick={this.onClickHum}>
                        <GiHamburgerMenu size={25} color={color} />
                      </HumBtn>
                      <Popup
                        modal
                        trigger={
                          <LogOutBtn type="button">
                            <FiLogOut size={25} color={color} />
                          </LogOutBtn>
                        }
                        className="popup-content"
                      >
                        {close => (
                          <ModelContainer theme={isDarkTheme}>
                            <ModelHeading theme={isDarkTheme}>
                              Are you sure, you want to logout?
                            </ModelHeading>
                            <ModelButtonContainer>
                              <ModelCancelBtn
                                type="button"
                                onClick={() => close()}
                                theme={isDarkTheme}
                              >
                                Cancel
                              </ModelCancelBtn>
                              <ModelConfirmBtn
                                type="button"
                                onClick={this.onClickConfirm}
                              >
                                Confirm
                              </ModelConfirmBtn>
                            </ModelButtonContainer>
                          </ModelContainer>
                        )}
                      </Popup>
                    </NavItems>
                  </MobileNavBar>
                  <DestopNavBar>
                    <Link to="/">
                      <WebsiteLogo src={websiteLogoTheme} alt="website logo" />
                    </Link>
                    <NavItems>
                      <MoonBtn
                        onClick={onToggle}
                        type="button"
                        data-testid="theme"
                      >
                        {isDarkTheme ? (
                          <BsBrightnessHigh size={25} color={color} />
                        ) : (
                          <HiMoon size={25} />
                        )}
                      </MoonBtn>
                      <ProfileImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                      <Popup
                        modal
                        trigger={
                          <DestopButton type="button" outline={isDarkTheme}>
                            Logout
                          </DestopButton>
                        }
                        className="popup-content"
                      >
                        {close => (
                          <ModelContainer theme={isDarkTheme}>
                            <ModelHeading theme={isDarkTheme}>
                              Are you sure, you want to logout?
                            </ModelHeading>
                            <ModelButtonContainer>
                              <ModelCancelBtn
                                type="button"
                                onClick={() => close()}
                                theme={isDarkTheme}
                              >
                                Cancel
                              </ModelCancelBtn>
                              <ModelConfirmBtn
                                type="button"
                                onClick={this.onClickConfirm}
                              >
                                Confirm
                              </ModelConfirmBtn>
                            </ModelButtonContainer>
                          </ModelContainer>
                        )}
                      </Popup>
                    </NavItems>
                  </DestopNavBar>
                </NavContent>
              </NavHeader>
              {isHumBtn && (
                <HumContainer theme={theme}>
                  <HumListContainer>
                    <Link to="/" className="link-item">
                      <HumItem color={color}>Home</HumItem>
                    </Link>
                    <Link to="/trending" className="link-item">
                      <HumItem color={color}>Trending</HumItem>
                    </Link>
                    <Link to="/gaming" className="link-item">
                      <HumItem color={color}>Gaming</HumItem>
                    </Link>
                    <Link to="/saved-videos" className="link-item">
                      <HumItem color={color}>Saved Videos</HumItem>
                    </Link>
                  </HumListContainer>
                </HumContainer>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
