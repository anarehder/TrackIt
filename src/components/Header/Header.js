import { ContainerHeader, CaixaTopo } from "./styled"
import logo from "../../assets/logo-completa.svg"

export default function Header() {
    return (
        <ContainerHeader>
            <CaixaTopo>
                TrackIt
                <img src={logo} alt="logo" />
            </CaixaTopo>
        </ContainerHeader>
    )
}