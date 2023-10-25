import React from "react";
import './style.css'
import Card from "../Card";

export default function SecaoExperienciaTrabalho() {
    return (
        <section className="exp expLight">
            <div className="txtExp">
              <h3 className="tituloLight">Experiências De Trabalho</h3>
              <div className="linha"></div>
              <p className="paragrafoLight">Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
            </div>

          <div className="areaCards">
            <Card 
            data = 'JUNHO 2012 - 2016' titulo = 'Web Designer' empresa = 'Pled Piper StartUp'
            texto = 'Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores'/>
            <Card
            data = 'AGOSTO 2016 - 2019' titulo = 'Product Designer' empresa = 'E Corp.'
            texto = 'Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra'/>
            <Card 
            data = 'FEVEREIRO 2019 - 2021' titulo = 'Digital Consulting' empresa = 'Arasaka Inc.'
            texto = 'Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução'/>
          </div>
        </section>
    )
}