import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiMoon} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
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
} from './styledComponents'

class Header extends Component {
  onClickConfirm = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
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

          const theme = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const color = isDarkTheme ? '#ffffff' : '#0f0f0f'

          return (
            <NavHeader theme={theme}>
              <NavContent>
                <MobileNavBar>
                  <Link to="/">
                    <WebsiteLogo src={websiteLogoTheme} alt="website logo" />
                  </Link>
                  <NavItems>
                    <MoonBtn onClick={onToggle}>
                      {isDarkTheme ? (
                        <BsBrightnessHigh size={25} color={color} />
                      ) : (
                        <HiMoon size={25} />
                      )}
                    </MoonBtn>
                    <GiHamburgerMenu size={25} color={color} />
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
                        <ModelContainer>
                          <ModelHeading>
                            Are you sure, you want to logout?
                          </ModelHeading>
                          <ModelCancelBtn type="button" onClick={() => close()}>
                            Cancel
                          </ModelCancelBtn>
                          <ModelConfirmBtn
                            type="button"
                            onClick={this.onClickConfirm}
                          >
                            Confirm
                          </ModelConfirmBtn>
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
                    <MoonBtn onClick={onToggle}>
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
                        <ModelContainer>
                          <ModelHeading>
                            Are you sure, you want to logout?
                          </ModelHeading>
                          <ModelCancelBtn type="button" onClick={() => close()}>
                            Cancel
                          </ModelCancelBtn>
                          <ModelConfirmBtn
                            type="button"
                            onClick={this.onClickConfirm}
                          >
                            Confirm
                          </ModelConfirmBtn>
                        </ModelContainer>
                      )}
                    </Popup>
                  </NavItems>
                </DestopNavBar>
              </NavContent>
            </NavHeader>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
