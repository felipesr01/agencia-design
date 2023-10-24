import React from "react";
import './style.css'
import Card from "../Card";

export default function SecaoExperienciaTrabalho() {
    return (
        <section className="txtExp">
            <h3>Experiências De Trabalho</h3>
            <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.</p>

          <div className="areaCards">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
    )
}