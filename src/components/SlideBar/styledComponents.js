import styled from 'styled-components'

export const SlideBarContainer = styled.div`
  //   padding: 20px 12px 20px 12px;
  position: sticky;
  top: 12vh;
  height: 88vh;
  width: 25%;
  max-width: 250px;
  display: flex;
  background-color: ${props => (props.bgColor ? '#181818' : '#ffffff')};
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const RouteItemContainer = styled.ul`
  padding-left: 0px;
`
// Rount Containers
export const HomeRouteContainer = styled.li`
  background-color: ${props => {
    if (props.theme === true) {
      return props.activeItem === 'HOME' && '#424242'
    }
    return props.activeItem === 'HOME' && '#d7dfe9'
  }};
  padding-left: 12px;

  display: flex;
  align-items: center;
  list-style-type: none;
`
export const TrendingRouteContainer = styled.li`
  background-color: ${props => {
    if (props.theme === true) {
      return props.activeItem === 'TRENDING' && '#424242'
    }
    return props.activeItem === 'TRENDING' && '#d7dfe9'
  }};
  padding-left: 12px;

  display: flex;
  align-items: center;
  list-style-type: none;
`

export const GamingRouteContainer = styled.li`
  background-color: ${props => {
    if (props.theme === true) {
      return props.activeItem === 'GAMING' && '#424242'
    }
    return props.activeItem === 'GAMING' && '#d7dfe9'
  }};
  padding-left: 12px;

  display: flex;
  align-items: center;
  list-style-type: none;
`
export const SaveVideoRouteContainer = styled.li`
  background-color: ${props => {
    if (props.theme === true) {
      return props.activeItem === 'SAVEITEM' && '#424242'
    }
    return props.activeItem === 'SAVEITEM' && '#d7dfe9'
  }};
  padding-left: 12px;

  display: flex;
  align-items: center;
  list-style-type: none;
`
// route end
export const RouteHeading = styled.h1`
  font-size: 20px;
  margin-left: 12px;
  color: ${probs => (probs.theme === true ? '#cccccc' : '#424242')};
`
export const ContactUsContainer = styled.div`
  //   padding: 20px 12px 20px 12px;
  padding: 0px 12px 0px 12px;
`
export const ContactHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.theme === true ? '#f4f4f4' : '#231f20')};
`
export const ContactLogosContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`
export const ContactLogo = styled.img`
  width: 40px;
  height: 40px;
`
export const ContactDescription = styled.p`
  font-size: 16px;
  margin-top: 12px;
  color: ${props => (props.theme === true ? '#f4f4f4' : '#231f20')};
`
