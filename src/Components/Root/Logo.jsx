import './root.css'

export default function Logo({menuState}) {
  return (
    <a className='logo' href="/"><h3 >{menuState === 'active' ? "Contrata ;D" : ";D"}</h3></a>
  )
}