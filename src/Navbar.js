import React from 'react'
import "./Navbar.css"
export default function navbar() {

  //   const [toggleMenu, setToogleMenu] = useState(false)
  //   const [largeur, setLargeur] = useState(window.innerWidth);

  //   const toogleNavSmallScreen = () => {
  //     setToogleMenu(!toggleMenu);
  //   }

  //   useEffect(() => {

  //     const changeWidth = () => {
  //         setlargeur(window.innerWidth);

  //         // if(window.innerWidth > 500){
  //         //     setToogleMenu(false);
  //         // }
  //     }

  //     window.addEventListener('resize', changeWidth);

  //     return () => {
  //         window.removeEventListener('resize', changeWidth);
  //     }
  //   }, [])
  return (
    <nav>
      {/* {toggleMenu && (
            
        )} */}
      <ul className='liste'>
        <li className='items'>Home</li>
        <li className='items' href="/Post" >Todos</li>
        <li className='items'>Posts</li>
        <li className='items'>Users</li>
      </ul>

      <button className='btn'>BTN</button>
    </nav>
  )
}
