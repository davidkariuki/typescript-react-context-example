import { FC, useContext } from "react"
import LanguageContext from "../contexts/LanguageContext"
import ColorContext from "../contexts/ColorContext"

export const Button: FC = () => {
  const color = useContext(ColorContext)
  const { language } = useContext(LanguageContext)

  const renderSubmit = (language: string): string => {
    return language === "english" ? "Submit" : "Voorleggen"
  }

  return (
    <button className={`ui ${color} button`}>{renderSubmit(language)}</button>
  )
}
