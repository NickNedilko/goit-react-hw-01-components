import styled from '@emotion/styled'



export const Card = styled.section`
    padding: 20px 0;
`
export const Title = styled.h2`
    font-size: 24px;
    text-transform: uppercase;
    color: cadetblue;
    text-align: center;
`

export const StatList = styled.ul`
    width: 400px;
    display: flex;
    margin: 0 auto;
`

export const StatItem = styled.li`
width: 45px;
padding: 15px;
display: flex;
flex-direction: column;
border: 1px solid black;
text-align: center;
background-color: ${props => {
    return props.backgroundColor;
  }};
`

export const Label = styled.span`
font-size: 18px;
font-weight: 600;
margin-bottom: 10px;
`

export const Percentage = styled.span`
color: white;
font-size: 20px;
`