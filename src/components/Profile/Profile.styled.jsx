import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 475px;

  margin-left: auto;
  margin-right: auto;
  font-size: 40px;

  background-color: white;
  border: 1px solid #a09f9e;
`;

export const Description = styled.div`
  height: 450px;
  padding: 40px;
  text-align: center;
  font-size: 40px;
  color: #a09f9e;
`;

export const AvatarIcon = styled.img`
  border-radius: 50%;
  margin-bottom: 25px;
  text-align: center;
`;

export const Username = styled.p`
  font-size: 50px;
  font-weight: 700;
  border-radius: 50%;
  text-align: center;
  color: #000;
  margin-bottom: 20px;
`;

export const Tag = styled.p`
  font-size: 35px;
  text-align: center;
  color: #a09f9;
  margin-bottom: 20px;
`;

export const Location = styled.p`
  font-size: 35px;
  text-align: center;
  color: #a09f9;
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  height: 100px;
  font-size: 40px;
  background-color: #f3f1ef;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 17px;
  border: 1px solid #a09f9e;
`;

export const Label = styled.span`
  color: #a09f9e;
  font-size: 20px;
`;

export const Quantity = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #000;
`;
