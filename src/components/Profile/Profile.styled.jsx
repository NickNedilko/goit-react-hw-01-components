import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 250px;
  text-align: center;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Description = styled.div`
  padding: 20px 0;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 500;
`;

export const Tag = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-style: italic;
`;

export const Stats = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  width: 80px;
  padding: 5px;
  border-radius: 4px;
  list-style: none;
  background-color: #b2b5b2;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const Quantity = styled.span`
  font-weight: 600;
  color: white;
`;
