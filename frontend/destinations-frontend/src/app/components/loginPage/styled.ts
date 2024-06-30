import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
`

export const Title = styled.h1`
    color: #092b55;
    font-size: 2rem;
    margin-bottom: 20px;
`

export const StyledButton = styled(Button)`
  background-color: #4285f4;
  color: #fff;
  font-weight: bold;
  text-transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #357ae8;
  }
`;