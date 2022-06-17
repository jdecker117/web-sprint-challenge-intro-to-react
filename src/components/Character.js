// Write your Character component here
import styled, { keyframes } from 'styled-components';

const StyledCharacter = styled.div`
display: flex;
justify-content: center;
margin-bottom: 40px;
font-size: 30px;
color: ghostwhite;


.character{
    display: flex;
    justify-content: space-between;
    width: 55%;
    padding: 20px;
    border: solid 2px green;
}

.bg-shading{
    background-color: green
    opacity: 0.5;
}
`

export default function Character(props){
    const {info} = props;
    return (
        <StyledCharacter className='bg shading'>
            <div className='character'>
                <div className='info'>{info.name}</div>
                <div className='info'>{info.birth_year}</div>
            </div>
        </StyledCharacter>
    )
}