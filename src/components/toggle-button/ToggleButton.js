import React, { useEffect, useState } from "react"
import { Icons } from "../../styles"
import * as S from "./styles"

const ToggleButton = () => {
  const [lightMode, setLightMode] = useState(true)

  useEffect(() => {
    let element = document.body
    element.classList.add("lightMode")
  }, [])

  const toggleTheme = () => {
    let element = document.body
    element.className = lightMode ? "darkMode" : "lightMode"
    setLightMode(!lightMode)
  }

  const Icon = () => {
    if (lightMode) {
      return <Icons.moon />
    }
    return <Icons.sun />
  }

  return (
    <S.container>
      <S.button onClick={toggleTheme}>{Icon()}</S.button>
    </S.container>
  )
}

export default ToggleButton
