export default function MenuItem({menuState, icon, title}) {
  return (
    <div className="menuItem">
              {icon}
              {menuState === 'active' ? <h5>{title}</h5> : ''}
    </div>
  )
}