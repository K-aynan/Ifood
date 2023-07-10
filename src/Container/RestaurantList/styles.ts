import styled from "styled-components";
import { colors } from "../../styles";

export const ListContainer = styled.div`
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top: 80px;
    margin-bottom: 120px;
    background-color: ${colors.white}

    @media (max-width: 1030px){
        grid-template-columns: 1fr;
    }
`
