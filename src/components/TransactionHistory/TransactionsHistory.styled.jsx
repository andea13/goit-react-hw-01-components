import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  width: 900px;
  margin: 50px auto 100px;
  border: 2px solid #e7eaea;
`;

export const TableHead = styled.thead`
  background-color: #05c8c3;
`;

export const TableCaption = styled.th`
  height: 60px;
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
`;

export const TableRow = styled.tr`
  text-align: center;
  height: 45px;

  &:nth-child(2n) {
    background-color: #e7eaea;
  }
`;

export const TableBody = styled.tbody`
  border: 2px solid #e7eaea;
`;

export const TableType = styled.td`
  text-transform: capitalize;
  display: flex;
  justify-content: space-around;
`;

export const TableAmount = styled.td`
  border: 2px solid #e7eaea;
`;

export const TableCurrency = styled.td`
  border: 2px solid #e7eaea;
`;
