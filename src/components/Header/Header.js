import { ContainerHeader, CaixaTopo } from "./styled"
import {UserContext} from "../../contexts/UserContext"
import { useContext } from "react"

export default function Header() {
    const [userDados, ] = useContext(UserContext);
    console.log(userDados.token);
    
    return (
        <ContainerHeader>
            <CaixaTopo data-test="header">
                TrackIt
                <img src={userDados.image} alt="logo" />
            </CaixaTopo>
        </ContainerHeader>
    )
}