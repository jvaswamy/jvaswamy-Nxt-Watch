import styled from 'styled-components'

export const NavHeader = styled.nav`
  //   padding-bottom: 0px;
  //   padding-top: 0px;
  display: flex;
  flex-direction: column;
  height: 12vh;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme};
  //   @media screen and (max-width: 767px) {
  position: sticky;
  top: 0;
  //   }
`
export const NavContent = styled.div`
  width: 90%;
`
export const MobileNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const WebsiteLogo = styled.img`
  width: 100px;
`
export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`
export const LogOutBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`
export const HumBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`
export const MoonBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`
// popup section

export const ModelContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#181818' : '#ffffff')};
  width: 400px;
  height: 200px;
  padding: 20px 10px 20px 10px;
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    width: 300px;
    height: 250px;
  }
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ModelHeading = styled.p`
  font-size: 22px;
  color: ${props => (props.theme === true ? '#ffffff' : '#1e293b')};
  margin-top: 0px;
`
export const ModelButtonContainer = styled.div`
  display: flex;
`
export const ModelCancelBtn = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  padding: 8px 16px;
  color: ${props => (props.theme === true ? '#ffffff' : 'gray')};
  background-color: transparent;
  border: 1px solid ${props => (props.theme === true ? '#ffffff' : 'gray')};
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
  width: 100px;
  height: 40px;
`
export const ModelConfirmBtn = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  padding: 8px 16px;
  color: #ffffff;
  background-color: #0967d2;
  border: none;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
  width: 100px;
  height: 40px;
`
// destop section

export const DestopNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
`
export const DestopButton = styled.button`
  color: ${props => (props.outline ? '#ffffff' : '#3b82f6')};
  border: 1px solid ${props => (props.outline ? '#ffffff' : '#3b82f6')};
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 8px 12px 8px 12px;
`
// Mobile Humbargar section
export const HumContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme};
  position: sticky;
  top: 12vh;
`
export const HumListContainer = styled.ul`
  width: 90%;
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;
`

export const HumItem = styled.li`
  margin-bottom: 8px;
  font-weight: 600;
  font-family: 'Roboto';
  color: ${props => props.color};
`
