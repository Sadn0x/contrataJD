/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'

import Logo from './Components/Root/Logo'
import Divider from './Components/Root/Divider'


import './assets/css/App.css'
import MenuItem from './Components/Root/MenuItem'
import MenuIcon from './Components/Root/Icons/MenuIcon'
import DashIcon from './Components/Root/Icons/DashIcon'
import RecruitmentIcon from './Components/Root/Icons/RecruitmentIcon'
import CalendarIcon from './Components/Root/Icons/CalendarIcon'
import EmployeeIcon from './Components/Root/Icons/EmployeeIcon'
import DepartmentIcon from './Components/Root/Icons/DepartmentIcon'
import SupportIcon from './Components/Root/Icons/SupportIcon'
import SettingsIcon from './Components/Root/Icons/SettingsIcon'

function App() {

  const [menuState,useMenuState] = useState('active')
  const MenuStateChange = () => {
    if (menuState === 'active') {
      return useMenuState('')
    } return useMenuState('active')
  }

  useEffect(() => {
    const preloaderOut = () => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        setTimeout(() => {
          preloader.style.top = '-100vh';
        }, 4000);
      }
    };
    preloaderOut();
  }, []);
  

  return (
    <>
      <div className="preloader">
        <span style={{ '--i': 1 }}>C</span>
        <span style={{ '--i': 2 }}>o</span>
        <span style={{ '--i': 3 }}>n</span>
        <span style={{ '--i': 4 }}>t</span>
        <span style={{ '--i': 5 }}>r</span>
        <span style={{ '--i': 6 }}>a</span>
        <span style={{ '--i': 7 }}>t</span>
        <span style={{ '--i': 8 }}>a</span>
        <span>&nbsp;</span>
        <span style={{ '--i': 9 }}> ;</span>
        <span style={{ '--i': 10 }}>D</span>
      </div>
      <main>
        <aside className={menuState === 'active' ? 'active' : ''}> 
          <Logo menuState={menuState} />
          <Divider height={40}/>
          <div className="sideMenu">
            {menuState === 'active' ? <h4>Menu Principal</h4> : ''}

            <MenuItem icon={<DashIcon/>} title='Dashboard' menuState={menuState} />
            <MenuItem icon={<RecruitmentIcon/>} title='Recrutamento' menuState={menuState} />
            <MenuItem icon={<CalendarIcon/>} title='Agendamento' menuState={menuState} />
            <MenuItem icon={<EmployeeIcon/>} title='Colaboradores' menuState={menuState} />
            <MenuItem icon={<DepartmentIcon/>} title='Departamento' menuState={menuState} />
          </div>
          <Divider height={40}/>
          <div className="sideMenu">
            {menuState === 'active' ? <h4>Outros</h4> : ''}

            <MenuItem icon={<SupportIcon/>} title='Suporte' menuState={menuState} />
            <MenuItem icon={<SettingsIcon/>} title='Configurações' menuState={menuState} />
          </div>
        </aside>
        <section>
          <button className="toggleMenu" onClick={()=> MenuStateChange()}><MenuIcon/></button>
          <p>Conteúdo Principal</p>
        </section>
      </main>
    </>
  )
}

export default App
