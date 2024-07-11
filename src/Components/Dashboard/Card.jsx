export default function Card ({title, subtitle,value, subvalue, backgroundColor, textColor}) {
  return(
    <div className="card" style={{backgroundColor: '#'+ backgroundColor}}>
      <h3 className="title">{title}</h3>
      <h4>{value}</h4>
      <p style={{color: '#'+textColor}}>{subvalue} {subtitle}</p>
    </div>
  )
}