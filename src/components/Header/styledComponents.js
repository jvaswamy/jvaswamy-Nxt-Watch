import styled from 'styled-components'

export const NavHeader = styled.nav`
  padding-bottom: 24px;
  padding-top: 24px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme};
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
export const MoonBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`
// popup section

export const ModelContainer = styled.div`
  background-color: #181818;
  width: 300px;
  padding: 20px 9px 20px 12px;
  border-radius: 10px;
  text-align: center;
`
export const ModelHeading = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin-top: 0px;
`
export const ModelCancelBtn = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px 16px;
  color: #ffffff;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
`
export const ModelConfirmBtn = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px 16px;
  color: #ffffff;
  background-color: #0967d2;
  border: none;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
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
