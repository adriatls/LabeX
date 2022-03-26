import styled from "styled-components";

export const ErroContainer = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    h1 {
        text-align: center;
        color: #fff;
        font-size: 40px;
    }
    img {
        filter: invert(100%) sepia(0%) saturate(7483%) hue-rotate(271deg) brightness(110%) contrast(104%);
        margin: 0 auto;
        @media(max-width: 480px) {
            width: 90%;
        }
    }
`