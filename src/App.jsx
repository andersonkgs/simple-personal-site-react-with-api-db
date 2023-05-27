import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import api from "./api";

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Curriculum from "./components/Curriculum/Curriculum";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  const [informacoes, setInformacoes] = useState({});
  const [curriculo, setCurriculo] = useState({});
  const [portfolio, setPortfolio] = useState([]);

  const fetchDados = async () => {
    try {
      const informacao = await api.get(`/informacoes/1`);
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo
      });

      const experienciaAcademica = await api.get(`/experiencias?tipo=Academica`);
      const experienciaProfissional = await api.get(`/experiencias?tipo=Profissional`);

      setCurriculo({
        sobre: informacao.data.sobre,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data
      });

      const portfolio = await api.get(`/portfolio`);
      setPortfolio(portfolio.data);

    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchDados();
  }, []);
  
  return (
    <>
    
      <BrowserRouter>
        <Header informacoes={informacoes}></Header>
        <Routes>
          <Route index element={<Curriculum curriculo={curriculo} />} />
          <Route path="portfolio" element={<Portfolio portfolio={portfolio} />} />
          <Route path="contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>

    </>
  )
}

export default App;
