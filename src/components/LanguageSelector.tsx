import { FC, useContext } from "react"
import LanguageContext from "../contexts/LanguageContext"

export const LanguageSelector: FC = () => {
  const { onLanguageChange } = useContext(LanguageContext)

  return (
    <div>
      <div>Select a Language</div>
      <i className="flag gb" onClick={() => onLanguageChange("english")} />
      <i className="flag nl" onClick={() => onLanguageChange("dutch")} />
    </div>
  )
}
