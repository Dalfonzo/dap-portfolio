import React, { useEffect, useState } from "react"
import { Icons } from "../../styles"
import * as S from "./styles"

const ToggleButton = () => {
  const [lightMode, setLightMode] = useState(
    localStorage.getItem("themeMode") === "true"
  )

  useEffect(() => {
    localStorage.setItem("themeMode", lightMode)
  }, [lightMode])

  useEffect(() => {
    const element = document.body
    element.classList.add(lightMode ? "lightMode" : "darkMode")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleTheme = () => {
    const element = document.body
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
