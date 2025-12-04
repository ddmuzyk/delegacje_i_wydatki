import styled from "styled-components";
import { colors } from "src/constants/colors";

export type DelegationProps = {
  name: string;
  dateFrom: string;
  dateTo: string;
  status: string;
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 8px;
    background-color: #fff;
    gap: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,
  Name: styled.h3`
    margin: 0;
    color: ${colors.grey[8]};
  `,
  Date: styled.p`
    margin: 0;
    color: ${colors.grey[8]};
  `,
  DateFrame: styled.span`
    /* font-weight: bold; */
  `,
  BottomWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Status: styled.div`
    background-color: green;
    width: fit-content;
    padding: 4px;
    border-radius: 4px;
  `,
};

export const Delegation = ({ name, dateFrom, dateTo, status }: DelegationProps) => {
  return (
    <S.Wrapper>
      <S.Name>{name}</S.Name>
      <S.Date>
        <S.DateFrame>{dateFrom}</S.DateFrame> - <S.DateFrame>{dateTo}</S.DateFrame>
      </S.Date>
      <S.Status>{status}</S.Status>
    </S.Wrapper>
  );
};