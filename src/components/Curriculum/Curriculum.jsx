import React from "react";

import "./Curriculum.css";

function Curriculum(props) {
    const { sobre, experienciaAcademica, experienciaProfissional } = props.curriculo;

    if(!sobre || !experienciaAcademica || !experienciaProfissional) {
        return <p>Carregando...</p>
    }

    return (
        <main className="content-page">
            <div className="container-contents">
                <div className="contents">
                    <h3>SOBRE MIM</h3>
                    <p>{sobre}</p>
                </div>
                <div className="contents">
                    <h3>FORMAÇÕES ACADÊMICAS</h3>
                    <ul>
                        {experienciaAcademica.map((item, index) => (
                            <li key={index}>
                                <b>{item.titulo}</b> - {item.descricao} - {item.local} {item.dataInicio} {item.dataFim};
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="contents">
                    <h3>HISTÓRICO PROFISSIONAL</h3>
                    <ul>
                        {experienciaProfissional.map((item, index) => (
                            <li key={index}>
                                <b>{item.titulo}</b> - {item.descricao} - {item.local} - {item.dataInicio} - {item.dataFim};
                            </li>
                        ))}                      
                    </ul>
                </div>
            </div>
        </main> 
    )
}

export default Curriculum;
