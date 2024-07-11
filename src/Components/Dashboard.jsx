import Title from './Root/Title';
import Card from './Dashboard/Card';
import ChartCard from './Dashboard/ChartCard';

import Chart1 from '../assets/images/Charts/chart1.jpg';
import Chart2 from '../assets/images/Charts/chart2.jpg';

import './Dashboard/dashboard.css';

export default function Dashboard() {
  return (
    <>
      <Title title="Dashboard" />

      <div className="mainContent">
        <div>
          <div className="cardContainer grid-1-1">
            <Card 
              title="Posição Disponível" 
              value="24" 
              subtitle="Urgências" 
              subvalue="4" 
              backgroundColor="FFEFE7" 
              textColor="FF5151"
            />
            <Card 
              title="Vagas de Emprego" 
              value="10" 
              subtitle="Contratações Ativas" 
              subvalue="4" 
              backgroundColor="E8F0FB" 
              textColor="3786F1"
            />
            <Card 
              title="Novos Funcionários" 
              value="24" 
              subtitle="Departamentos" 
              subvalue="4" 
              backgroundColor="FDEBF9" 
              textColor="EE61CF"
            />
          </div>
          
          <div className="cardContainer grid-1-2">
          <ChartCard 
              title="Total de Funcionários"
              value="216"
              menValue="120"
              womenValue="96"
              image={Chart1}
              percent="+2"
            />
            <ChartCard 
              title="Solicitação de Talentos"
              value="16"
              menValue="6"
              womenValue="10"
              image={Chart2}
              percent="+5"
            />
          </div>
          
          
          <div className="chartContainer grid-1-3">
            
          </div>

          <div>
            Anúncio
          </div>
        </div>

        <div>
          <div>Atividades Recentes</div>
          <div>Próximas Atividades</div>
          <button onClick={(e)=>{console.log(e.target.outerText)}}>Botão</button>
        </div>
      </div>
    </>
  );
}
