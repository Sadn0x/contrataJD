import DownArrow from '../Root/Icons/DownArrow'

export default function Profile({name, image}) {
  return(
    <>
      <div className='profile'>
        <img src={image} alt={name} />
        <h6>{name}</h6>
        <DownArrow/>
      </div>
    </>
  )
}