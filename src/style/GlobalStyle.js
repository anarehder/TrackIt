import { createGlobalStyle } from "styled-components"
import  {corBotao, coresInput, corLink}  from "../constants/colors"

const GlobalStyle = createGlobalStyle`
	button {
		height: 45px;
		background: ${corBotao.background};
		border-radius: 5px;
		border-style: none;
		font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
		font-size: 21px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${corBotao.text};
		&:disabled {
			opacity: 0.7;
		}
	}
	input {
		background: ${coresInput.background};
		border: 1px solid ${coresInput.border};
        color: ${coresInput.text};
		border-radius: 3px;
		height: 45px;
		margin-bottom: 10px;
		margin-top: 10px;
		padding: 0 10px;
		font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
		font-size: 21px;
		display: flex;
		align-items: center;
		&::placeholder{
			font-style: normal;
		}
		
	}
    a {
        color: ${corLink.text};
    }
`

export default GlobalStyle