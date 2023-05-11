import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
`

export const HomeContent = styled.div`
  background-color: #f1f1f1;

  width: 70%;
  flex-grow: 1;
  min-height: 100vh;
  padding: 20px;
`
export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchInputContainer = styled.div`
  background-color: yellow;
  display: flex;
  align-items: center;
  border: 1px solid #94a3b8;
  width: 60%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  padding: 5px 12px 5px 12px;
  font-size: 18px;
  color: #616e7c;
  outline: none;
`
export const SearchBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  height: 40px;
  width: 80px;
  border-left: 1px solid #94a3b8;
`
export const VideoList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
