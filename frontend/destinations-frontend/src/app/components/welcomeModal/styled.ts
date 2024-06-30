import styled from "@emotion/styled";

import { Button as MuiButton, TextField, withStyles } from "@mui/material";

export const Body = styled.div`
  background-color: white;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHeader = styled.div`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 16px;
    color: #001166;
    text-align: center;
`;

export const BodyText = styled.div`
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 16px;
    color: black;
    text-align: center;
`;

export const StyledTextField = styled(TextField)`
    margin-bottom: 16px;
 `;


export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 16px;
  color: black;
  text-align: center;
`;
const buttonStyles = {
  padding: "8px 12px",
  fontWeight: 900,
  border: 0,
  borderRadius: "10px",
};

export const ScoreContainer = styled.div`
  border-radius: 10px;
  width: 80px;
  height: 80px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #001166;
  margin-bottom: 16px;
`;

export const ScoreTitle = styled.div`
  color: grey;
  font-weight: 900;
  font-size: 16px;
`;

export const Score = styled.div`
  font-weight: 900;
  color: white;
  font-size: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px; 
  gap: 16px;
`;

export const NewGameButton = styled(MuiButton)({
  ...buttonStyles,
  backgroundColor: "#00ccde",
  color: "white",
  "&:hover": {
    opacity: "50%",
    backgroundColor: "#00ccde",
  },
});

export const CloseButton = styled(MuiButton)({
  ...buttonStyles,
  backgroundColor: "white",
  color: "grey",
  "&:hover": {
    opacity: "50%",
    backgroundColor: "#cdcdcd",
  },
});