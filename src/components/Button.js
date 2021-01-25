import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${primary => (primary ? "#161616" : "#077bf1")};
  white-space: nowrap;
  padding: 10px 32px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: 2px solid #96d1ea;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: 15px;

  &:hover {
    background: ${({ primary }) => (primary ? "#96d1ea" : "#f26a2e")};
    color: #161616;
    transform: translateY(-2px);
  }
`
