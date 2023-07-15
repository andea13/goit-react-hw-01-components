import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  width: 475px;

  margin: 50px auto 100px;
`;

export const StatisticsTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  color: #73716f;
`;

export const StatList = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  height: 100px;
`;

export const StatItem = styled.li`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  &:first-child {
    background-color: #28f2f4;
  }

  &:nth-child(2) {
    background-color: #d878e4;
  }

  &:nth-child(3) {
    background-color: #fb7c8d;
  }

  &:nth-child(4) {
    background-color: #19eac7;
  }

  &:nth-child(5) {
    background-color: #f9ba7c;
  }
`;

export const StatLabel = styled.span`
  font-size: 20px;
  color: #fff;
`;

export const StatPercentage = styled.span`
  font-size: 30px;
  color: #fff;
`;
