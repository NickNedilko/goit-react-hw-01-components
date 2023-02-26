import styled from '@emotion/styled';

export const List = styled.ul``;

export const Friends = styled.li`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin: 0 auto;
  width: 200px;
  height: 60px;
  border: 1px solid black;
  align-items: center;
  margin-bottom: 15px;
  background-color: turquoise;
  border-radius: 6px;
  gap: 15px;
  box-shadow: 10px 5px 5px black;
`;
export const FriendName = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const Avatar = styled.img``;

export const Status = styled.p`
  margin-left: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
