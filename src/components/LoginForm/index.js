import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginFormContainer,
  FormContainer,
  WebsiteImage,
  InputContainer,
  InputLabel,
  UsernameInputField,
  ShowPasswordContainer,
  CheckBox,
  CheckBoxText,
  LoginButton,
  ErrorMgs,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    passwordType: 'password',
    errorMgs: 'UserInvalid',
    showSubmitError: false,
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  renderInputField = isDarkTheme => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username" outline={isDarkTheme}>
          USERNAME
        </InputLabel>
        <UsernameInputField
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          outline={isDarkTheme}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  onSubmitSuccess = data => {
    const {history} = this.props
    Cookies.set('jwt_token', data, {expires: 10})
    history.replace('/')
  }

  onSubmitFailure = errorMgs => {
    this.setState({errorMgs, showSubmitError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(responseData.jwt_token)
    } else {
      this.onSubmitFailure(responseData.error_msg)
    }
  }

  onClickCheckbox = event => {
    this.setState({passwordType: event.target.checked ? 'text' : 'password'})
  }

  renderPasswordField = isDarkTheme => {
    const {password, passwordType} = this.state
    return (
      <>
        <InputLabel htmlFor="password" outline={isDarkTheme}>
          PASSWORD
        </InputLabel>
        <UsernameInputField
          type={passwordType}
          id="password"
          placeholder="Password"
          value={password}
          outline={isDarkTheme}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {errorMgs, showSubmitError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const websiteLogoTheme = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginFormContainer outline={isDarkTheme}>
              <FormContainer onSubmit={this.submitForm} bgColor={isDarkTheme}>
                <WebsiteImage src={websiteLogoTheme} alt="website log" />
                <InputContainer>
                  {this.renderInputField(isDarkTheme)}
                </InputContainer>
                <InputContainer>
                  {this.renderPasswordField(isDarkTheme)}
                </InputContainer>
                <ShowPasswordContainer>
                  <CheckBox type="checkbox" onClick={this.onClickCheckbox} />
                  <CheckBoxText outline={isDarkTheme}>
                    Show Password
                  </CheckBoxText>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMgs>*{errorMgs}</ErrorMgs>}
              </FormContainer>
            </LoginFormContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
