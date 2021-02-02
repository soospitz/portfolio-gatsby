// import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"
// import { FaBars } from "react-icons/fa"
// import { menuData } from "../data/MenuData"
// import scrollTo from 'gatsby-plugin-smoothscroll';

// const Header = ({ toggle, scroll }) => {
//   return (
//     <Nav>
//       <NavHome to="/">☾</NavHome>
//       <Bars onClick={toggle} />
//       <NavMenu>
//         {menuData.map((item, index) => (
//           <NavLink onClick={scroll} key={index} id={item.id}>
//             {item.title}
//           </NavLink>
//         ))}
//       </NavMenu>
//     </Nav>
//   )
// }


// export default Header

// const Nav = styled.nav`
//   background: #161616;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.5rem calc((100vw - 1300px) / 2);
//   padding-right: 3rem;
//   z-index: 99;
//   position: sticky;
//   top: 0;
// `
// const NavHome = styled(Link)`
//   font-size: 1.4rem; 
//   color: #96d1ea;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   transition: 1s;
//   float: right;
//   padding-left: 3rem;
//   cursor: pointer;
  
//   &:hover {
//     color: #6c6c6c;
//   }
// `
// const NavLink = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   transition: 1s;
//   float: right;
//   cursor: pointer;
  
//   &:hover {
//     color: #6c6c6c;
//   }
// `
// const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `
// const NavMenu = styled.div`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `

