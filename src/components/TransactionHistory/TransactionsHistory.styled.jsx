import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  width: 900px;
  margin: 50px auto 100px;

  border-collapse: collapse;
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

  &:nth-of-type(2n) {
    background-color: #e7eaea;
  }
`;

export const TableBody = styled.tbody`
  border-bottom: 2px solid #e1e3e3;
  border-left: 2px solid #e1e3e3;
`;

export const TableType = styled.td`
  text-transform: capitalize;
  text-align: center;

  height: 45px;
  color: #5e5e5e;
`;

export const TableAmount = styled.td`
  color: #5e5e5e;
  border-left: 2px solid #e1e3e3;
  border-right: 2px solid #e1e3e3;
`;

export const TableCurrency = styled.td`
  color: #5e5e5e;
  border-left: 2px solid #e1e3e3;
  border-right: 2px solid #e1e3e3;
`;
