import { FC, useContext } from "react"
import LanguageContext from "../contexts/LanguageContext"

export const Field: FC = () => {
  const { language } = useContext(LanguageContext)
  const text = language === "english" ? "Name" : "Naam"

  return (
    <div className="ui field">
      <label>{text}</label>
      <input type="text" />
    </div>
  )
}
