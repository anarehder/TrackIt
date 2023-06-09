import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage.js"
import RegisterPage from "./pages/RegisterPage/RegisterPage.js"
import HabitsPage from "./pages/HabitsPage/HabitsPage.js"
import TodayPage from "./pages/TodayPage/TodayPage.js"
import HistoryPage from "./pages/HistoryPage/HistoryPage.js"
import { UserContext } from "./contexts/UserContext.js"
import { PorcentagemContext } from "./contexts/PorcentagemContext.js"
import { useState } from "react";

export default function App() {
  const [userDados, setUserDados] = useState();
  const [valorPorcentagem, setValorPorcentagem] = useState(0);

  return (
    <UserContext.Provider value={[userDados, setUserDados]}>
      <PorcentagemContext.Provider value={[valorPorcentagem, setValorPorcentagem]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="historico" element={<HistoryPage />} />
          </Routes>
        </BrowserRouter>
      </PorcentagemContext.Provider>
    </UserContext.Provider>
  );
}

//font-family: 'Playball', cursive;
//font-family: 'Lexend Deca', sans-serif;