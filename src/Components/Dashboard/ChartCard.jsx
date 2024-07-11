export default function ChartCard({title, value, menValue, womenValue, image, percent}) {
  return (
    <>
      <div className="chartCard">
        <h3>{title}</h3>
        <h4>{value}</h4>
        <p>{menValue} Homens <br/> {womenValue} Mulheres</p>
        <div>
          <img src={image}/>
          <p>{percent}% Mês Passado</p>
        </div>
      </div>
    </>
  )  
}