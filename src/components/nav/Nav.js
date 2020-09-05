import React from "react"
import data from "../../data/navItems"
import * as S from "./styles"

const Nav = () => {
  // return <S.Nav></S.Nav>

  return (
    <S.Nav>
      {Object.values(data).map(el => (
        <S.NavLink key={el.url} to={el.url}>
          {el.title}
        </S.NavLink>
      ))}
    </S.Nav>
  )
}

export default Nav
