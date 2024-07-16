import styled from 'styled-components'

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #0f172a;
  padding: 10px;
`

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
`

export const HomePageHeading = styled.h1`
  font-family: 'HK Grotesk';
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #f8fafc;
  margin-top: 16px;
  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TextInputContainer = styled.form`
  background-color: #1d2537;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 522px;
  height: 32px;
  border-radius: 4px;
  margin-top: 20px;
  @media screen and (min-width: 1024px) {
    width: 522px;
    height: 36px;
  }
`

export const TextInput = styled.input`
  background: none;
  border-radius: 4px;
  border: ${props => (props.isUsernameInvalid ? '1px solid #DC2626' : 'none')};
  font-weight: 400;
  outline: none;
  height: 32px;
  width: 232px;
  padding: 4px 8px;
  color: #94a3b8;
  @media screen and (min-width: 1024px) {
    height: 56px;
    width: 458px;
    font-size: 16px;
    padding: 8px 16px;
  }
`

export const SearchIconButton = styled.button`
  width: 40px;
  border: none;
  background-color: #4f4e4c;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 0px 4px 4px 0px;
  @media screen and (min-width: 1024px) {
    width: 48px;
  }
`

export const HomePageImage = styled.img`
  width: 90%;
  max-width: 538px;
  margin-top: 40px;
  @media screen and (min-width: 1024px) {
    width: 538px;
    height: 417px;
  }
`

export const ErrorMessage = styled.p`
  font-size: 12px;
  width: 232px;
  text-align: left;
  color: #dc2626;
  margin-top: 4px;
  margin-bottom: 0px;
  @media screen and (min-width: 1024px) {
    width: 458px;
    font-size: 16px;
  }
`
export const LoadingViewContianer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureViewLogo = styled.img`
  width: 296px;
  height: 145px;
  margin: 10px;
  @media screen and (min-width: 1024px) {
    width: 560px;
    height: 274px;
  }
`

export const FailureText = styled.h1`
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  width: 300px;
  @media screen and (min-width: 1024px) {
    font-size: 32px;
    width: 500px;
  }
`

export const TryAgainButton = styled.button`
  background-color: #3b82f6;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    font-size: 14px;
    padding: 12px 24px;
  }
`
