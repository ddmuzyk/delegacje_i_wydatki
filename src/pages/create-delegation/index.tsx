import styled from "styled-components";
import { useRef } from "react";
import { colors } from "src/constants/colors";
import { FormGroup, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button } from "src/components/button";
import plus from "src/assets/plus-white.svg";
import { Expense, ExpenseProps } from "../delegations/components/expense";
import { Dialog, DialogContent, DialogRef, DialogHeader } from "src/components/dialog";
import { showDialog, closeDialog } from "src/components/dialog/utils";
// import dayjs from "dayjs";

const mockExpenses: ExpenseProps[] = [
  {
    title: "Lunch with client",
    amount: 45.50,
    currency: "USD",
    date: "2023-10-12",
    description: "Business lunch at Italian restaurant"
  },
  {
    title: "Taxi to airport",
    amount: 30.00,
    currency: "USD",
    date: "2023-10-13",
    description: "Taxi ride from office to airport"
  }
];

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
  DataGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
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
    z-index: 1500;
  `,
  ExpensesHeadingWrapper: styled.div`
    display: flex;
    justify-content: center;  
    align-items: center;
    gap: 8px;
  `,
  ExpensesHeading: styled.h2`
    /* margin: 0; */
    text-align: center;
    color: ${colors.grey[8]};
  `,
  Button: styled(Button)`
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
  `,
  PlusIcon: styled.img`
    width: 18px;
    height: 18px;
  `,
  ExpenseList: styled.ol`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
    margin: 0;
  `,
}

export default function AddDelegationPage() {
  const dialogRef = useRef<DialogRef>(null);

  return (
    <S.Wrapper>
      <S.Heading>Utwórz delegację</S.Heading>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <S.Form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <S.DataGroup>
            <TextField label="Nazwa delegacji" />
            <S.FormGroup>
              <S.RowTextField label="Kraj" />
              <S.RowTextField label="Miasto" />
            </S.FormGroup>
            <S.FormGroup>
              <S.DatePicker label="Data od" disableFuture={true} />
              <S.DatePicker label="Data do" disableFuture={true} />
            </S.FormGroup>
          </S.DataGroup>
          <S.DataGroup>
            <S.ExpensesHeadingWrapper>
              <S.ExpensesHeading>Wydatki</S.ExpensesHeading>
              <S.Button onClick={() => showDialog(dialogRef)}>
                <S.PlusIcon src={plus} alt="Add" />
              </S.Button>
            </S.ExpensesHeadingWrapper>
            <S.ExpenseList>
              {mockExpenses.map((expense, index) => (
                <li key={index}>
                  <Expense {...expense} />
                </li>
              ))}
            </S.ExpenseList>
          </S.DataGroup>
        </S.Form>
        <Dialog ref={dialogRef}>
          <DialogHeader title="Nowy wydatek" onClose={() => closeDialog(dialogRef)} />
          <DialogContent>
            <S.DataGroup>
              <TextField label="Tytuł" fullWidth />
              <S.FormGroup>
                <S.RowTextField label="Kwota" type="number" />
                <S.RowTextField label="Waluta" />
              </S.FormGroup>
              <S.DatePicker label="Data" disableFuture={true} />
              <TextField label="Opis" multiline rows={4} fullWidth />
              <S.Button type="submit" onClick={() => closeDialog(dialogRef)}>Dodaj wydatek</S.Button>
            </S.DataGroup>
          </DialogContent>
        </Dialog>
      </LocalizationProvider>
    </S.Wrapper>
  );
}