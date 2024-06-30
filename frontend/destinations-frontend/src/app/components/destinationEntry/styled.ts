import styled from "@emotion/styled";
import { ButtonBase, Divider } from "@mui/material";


export const StyledEntry = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: white;
    color: black;
`
export const StyledButtonBase = styled(ButtonBase)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: white;
    color: black;
`

export const ImageRow = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 10px 0px;
    width: 100%;
    justify-content: start;
    align-items: center;
    overflow: scroll;
`

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 10px 12px;
    justify-content: space-between;
    align-items: center;
`

export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: white;
    justify-content: center;
    align-items: start;
    padding: 0px 12px;
`

export const StyledImage = styled.img`
  object-fit: cover;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 0px 12px 0px 0px;
`;


export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ProfilePicture = styled.img`
  object-fit: cover;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 30px;
  margin: 0px 12px 0px 0px;
`;