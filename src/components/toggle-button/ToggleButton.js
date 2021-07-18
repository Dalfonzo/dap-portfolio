import React, { useEffect, useState } from "react"
import { Icons } from "../../styles"
import * as S from "./styles"

const ToggleButton = () => {
  const [lightMode, setLightMode] = useState(true)

  useEffect(() => {
    const element = document.body
    setLightMode(() => {
      const isLight = localStorage.getItem("isLightMode") === "true"
      element.classList.add(isLight ? "lightMode" : "darkMode")
      return isLight
    })
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleTheme = () => {
    const element = document.body
    element.className = lightMode ? "darkMode" : "lightMode"
    setLightMode(prevState => {
      const newVal = !prevState
      localStorage.setItem("isLightMode", newVal)
      return newVal
    })
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
