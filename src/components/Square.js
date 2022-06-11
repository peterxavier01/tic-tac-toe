import styled from "styled-components";

const StyledButton = styled.button`
    border: 1px solid #00bfb3;
    font-size: 40px;
    background-color: #e7e7f7;
    height: 80px;
    width: 80px;
    padding: 0;
    text-align: center;
    color: #03b5aa;
    margin-right: -1px;
    margin-top: -1px;
    float: left;
    background-color: #fff;    
    cursor: pointer;

    &.X {
        color: #00bfb3;
    }
      
    &.O {
    color: rgb(255, 0, 191);
    }
`;

const Square = ({ value, onClick }) => {
    const style = value ? `squares ${value}`: `squares`;

    return (
        <>
        <StyledButton className={style} onClick={onClick}>
            { value }
        </StyledButton>
        </>
    );
}
 
export default Square;