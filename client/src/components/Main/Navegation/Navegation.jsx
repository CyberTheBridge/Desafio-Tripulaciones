import {Link} from "react-router-dom";
import { useState, useEffect } from "react";



const Navegation = () => {

  const [onClick, setOnClick] = useState(false);


  const handleBackgroundIcon = () => {
    setOnClick(true);
    setTimeout(() => {
      setOnClick(false);
    }, 1000);
  };

  useEffect(() => {
    if (onClick) {
      const timer = setTimeout(() => {
        setOnClick(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [onClick]);

  return (
    <div className="navigationContainer">
      <Link to="/home">        
        <div onClick={handleBackgroundIcon} className="iconNavigation">
          <img src="assets/Home.svg" alt="home" />
          <span>Home</span>
        </div>
      </Link>
      <Link to="/game">        
        <div onClick={handleBackgroundIcon} className="iconNavigation">
        <img src="assets/juego.svg" alt="juego" />
          <span>Juego</span>
        </div>
      </Link>
      <Link to="/info">        
        <div onClick={handleBackgroundIcon} className="iconNavigation">
        <img className="formacion" src="assets/Formación.svg" alt="formación" />
          <span>Formación</span>
        </div>
      </Link>
      <Link to="/profile">  
        <div onClick={handleBackgroundIcon} className="iconNavigation">
          <img src="assets/perfil.svg" alt="perfil" />
          <span>Perfil</span>
        </div>
      </Link>
      </div>
  );
}
export default Navegation;


//MENU HAMBURGUESA COMPONENTE

// import { useState } from 'react';
// import {Link} from "react-router-dom";


// // importación del icono Hamburger
//     import { Squash as Hamburger } from 'hamburger-react';

// //importación del menú.
//     import * as React from 'react';
//     import Button from '@mui/material/Button';
//     import ClickAwayListener from '@mui/material/ClickAwayListener';
//     import Grow from '@mui/material/Grow';
//     import Paper from '@mui/material/Paper';
//     import Popper from '@mui/material/Popper';
//     import MenuItem from '@mui/material/MenuItem';
//     import MenuList from '@mui/material/MenuList';
//     import Stack from '@mui/material/Stack';



// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     } else if (event.key === 'Escape') {
//       setOpen(false);
//     }
//   }

//   // useEffect from menu MUI
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     <>
//     <Stack direction="row" spacing={17}>
//       <div className="hide-on-large-screen">
//           <Button
//             ref={anchorRef}
//             id="composition-button"
//             aria-controls={open ? 'composition-menu' : undefined}
//             aria-expanded={open ? 'true' : undefined}
//             aria-haspopup="true"
//             onClick={handleToggle}
//           >
//           <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} direction="right" duration={0.6} rounded color="#ff7a62" />        
//           </Button>
//         <Popper
//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           placement="bottom-start"
//           transition
//           disablePortal
//         >
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === 'bottom-start' ? 'left top' : 'left bottom',
//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList
//                     autoFocusItem={open}
//                     id="composition-menu"
//                     aria-labelledby="composition-button"
//                     onKeyDown={handleListKeyDown}
//                     className='menuHam'
//                   >
//                     <Link to="/home">< MenuItem  onClick={handleClose}>Home</MenuItem></Link>
//                     <Link to="/game"><MenuItem onClick={handleClose}>Juego</MenuItem></Link>
//                     <Link to="/info"><MenuItem onClick={handleClose}>Formación</MenuItem></Link>
//                     <Link to="/profile"><MenuItem onClick={handleClose}>Perfil</MenuItem></Link>
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </div>
//     </Stack>
    
    
//     <nav className="navbar">
//         <ul className="ul_navbar">
//             <Link className='link' to="/home">HOME</Link>
//             <Link className='link' to="/game">JUEGO</Link>
//             <Link className='link' to="/info">FORMACIÓN</Link>
//             <Link className='link' to="/profile">PERFIL</Link>
//         </ul>
//     </nav>
//     </>

//   );

// };

// export default NavBar;
