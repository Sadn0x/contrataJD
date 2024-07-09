/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'

import Logo from './Components/Root/Logo'
import Divider from './Components/Root/Divider'
import Profile from './Components/Root/Profile'


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
import SearchIcon from './Components/Root/Icons/SearchIcon'
import NotificationIcon from './Components/Root/Icons/NotificationIcon'
import ChatIcon from './Components/Root/Icons/ChatIcon'
import Preloader from './Components/Root/Preloader'

import UserImage from './assets/images/UserImage/UserImage.jpg'
import TopMenu from './Components/Root/TopMenu'

function App() {

  const screenWidth = window.screen.width

  /* Menu State */
  const [menuState,useMenuState] = useState('active')
  const MenuStateChange = () => {
    if (menuState === 'active') {
      return useMenuState('')
    } return useMenuState('active')
  }

  /* Preloader */
  useEffect(() => {
    const preloaderOut = () => {
      const preloader = document.querySelector('.preloader');
      if(screenWidth < 576) {
        MenuStateChange();
      }
      if (preloader) {
        setTimeout(() => {
          preloader.style.top = '-100vh';
        }, 100);
      }
    };
    preloaderOut();
  }, []);

  /* Content State */

  
  /* Notification State */

  const [notification, useNotification] = useState(true);
  const hadNotification = () => {
    if (notification === true) {
      return useNotification(false)
    } return useNotification(true)
  }

  /*<Preloader/>*/

  return (
    <>
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
          <div className="topBar">
            <div className={screenWidth > 576 ? 'searchBar' : 'searchBar searchBarMobile'}>
            {screenWidth > 576 ? <input type="text" name="Busca" placeholder='Busca' id="busca" /> : ''}
              <SearchIcon/>
            </div>

            {screenWidth < 576 ? menuState === 'active' ? '' : <TopMenu hadNotification={hadNotification} notification={notification}  screenWidth={screenWidth}/> : <TopMenu hadNotification={hadNotification} notification={notification} screenWidth={screenWidth}/>}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
