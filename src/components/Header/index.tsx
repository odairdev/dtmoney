import { useContext } from 'react';
import logoImg from '../../assets/logo.svg'
import { ModalContext } from '../../ModalContext';

import { Container, Content } from "./styles";


export function Header() {
const { handleOpenNewTransactionModal } = useContext(ModalContext)


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="OJ Money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>Nova Transação</button>
            </Content>
        </Container>
    )
}