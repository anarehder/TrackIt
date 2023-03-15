import { ContainerFooter, Vazio, Menu, Hoje } from "./styled"

export default function Footer() {
    return (
        <ContainerFooter>
            <Hoje>Hoje</Hoje>
            <Vazio></Vazio>
            <Menu>
                <div>Hábitos</div>
                <div>Histórico</div>
            </Menu>
            
        </ContainerFooter>
    )
}