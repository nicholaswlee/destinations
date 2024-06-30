import styled from "@emotion/styled";
import { Divider } from "@mui/material";


export const StyledEntry = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: white;
    color: black;
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