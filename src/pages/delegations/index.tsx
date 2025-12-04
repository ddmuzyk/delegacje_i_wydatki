import styled from "styled-components";
import { colors } from "src/constants/colors";
import { Delegation, DelegationProps } from "./components/delegation";

const mockDelegations: DelegationProps[] = [
  {
    name: "Delegacja służbowa do Krakowa",
    dateFrom: "2024-01-10",
    dateTo: "2024-01-12",
    status: "Zatwierdzona",
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
    margin: 0;
    /* font-size: 20px; */
    color: ${colors.grey[8]};
  `,
  DelegationList: styled.ol`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-inline: 16px;
    box-sizing: border-box;
    gap: 4px;
  `,
};

export default function DelegationsPage() {
  return <S.Wrapper>
    <S.Heading>Moje delegacje</S.Heading>
    <S.DelegationList>
      {mockDelegations.map((delegation, index) => (
        <li key={index}>
          <Delegation {...delegation} />
        </li>
      ))}
    </S.DelegationList>
  </S.Wrapper>;
}