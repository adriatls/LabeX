import React from "react";
import styled from "styled-components";
import crash from "../../assets/crash.png"
import { ErroContainer } from "./Styles";

export default function ErrorPage () {
    return (
        <ErroContainer>
            <h1>#404 Página não encontrada</h1>
            <img src={crash} alt="Ícone de foguete caído"/>
        </ErroContainer>
    );
};