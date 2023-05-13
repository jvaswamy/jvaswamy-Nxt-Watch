import styled from 'styled-components'

export const GamingVideoItem = styled.li`
  margin-bottom: 10px;
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
  margin: 12px;
`

export const GamingThumblai = styled.img`
  width: 100%;
`
export const GamingVideoContent = styled.div``
export const GamingTitle = styled.p`
  font-size: 18px;
  margin-top: 0px;
  font-weight: bold;
  color: ${props => (props.theme === true ? '#f4f4f4' : '#231f20')};
`
export const GamingViews = styled.p`
  font-size: 18px;
  margin-top: 0px;
  padding-top: 0px;
  color: ${props => (props.theme === true ? '#94a3b8' : '#7e858e')};
`
