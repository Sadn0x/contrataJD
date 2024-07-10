import NotificationIcon from './Icons/NotificationIcon'
import ChatIcon from './Icons/ChatIcon'

import Profile from './Profile'

import UserImage from '../../assets/images/UserImage/UserImage.jpg'

export default function TopMenu ({hadNotification, notification, screenWidth}) {
  return(
    <div className="topMenu">
      {screenWidth < 576 ? '' : <button onClick={()=>{hadNotification()}}>Toggle Notification</button>}
      <div onClick={()=>{alert('Notificação em desenvolvimento')}}>
        <span className={ notification === true ? 'hasNotification' : ''}></span>
        <NotificationIcon />
      </div>
      <div onClick={()=>{alert('Chat em desenvolvimento')}}>
        <span className={ notification === true ? 'hasNotification' : ''}></span>
        <ChatIcon/>
      </div>
      <div>
        
        <Profile image={UserImage} name='Usuário' />
      </div>
      </div>
  )
}