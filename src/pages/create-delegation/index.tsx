import styled from "styled-components";
import { colors } from "src/constants/colors";
import { FormGroup, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const S = {
  Wrapper: styled.section`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  `,
  Heading: styled.h1`
    margin-block: 32px;
    color: ${colors.grey[8]};
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-inline: 60px;
    background-color: ${colors.white};
    border-radius: 8px;
    padding: 24px;
    gap: 16px;
    width: 100%;
    max-width: 1000px;
  `,
  FormGroup: styled(FormGroup)`
    display: flex;
    flex-direction: row;
    gap: 16px;
  `,
  RowTextField: styled(TextField)`
    flex: 1;
  `,
  DatePicker: styled(DatePicker)`
    flex: 1;
  `,
}

export default function AddDelegationPage() {
  return (
    <S.Wrapper>
      <S.Heading>Utwórz delegację</S.Heading>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <S.Form>
          <TextField label="Nazwa delegacji" />
          <S.FormGroup>
            <S.RowTextField label="Kraj" />
            <S.RowTextField label="Miasto" />
          </S.FormGroup>
          <S.FormGroup>
            <S.DatePicker label="Data od" />
            <S.DatePicker label="Data do" />
          </S.FormGroup>
        </S.Form>
      </LocalizationProvider>
    </S.Wrapper>
  );
}