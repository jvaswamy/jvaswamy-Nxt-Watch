import styled from 'styled-components'

export const SlideBarContainer = styled.div`
  padding: 20px 12px 20px 12px;
  height: 100vh;
  width: 25%;
  max-width: 250px;
  display: flex;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const RouteItemContainer = styled.ul`
  padding-left: 0px;
`

export const RouteContainer = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
`
export const RouteHeading = styled.h1`
  font-size: 20px;
  margin-left: 12px;
`
export const ContactUsContainer = styled.div``
export const ContactHeading = styled.h1`
  font-size: 26px;
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
  font-size: 18px;
`
