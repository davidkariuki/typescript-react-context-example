import { createContext, FC, useState } from "react"

export const LanguageStore: FC = ({ children }) => {
  const [language, setLanguage] = useState<string>("english")

  const onLanguageChange = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <LanguageProvider value={{ language, onLanguageChange: onLanguageChange }}>
      {children}
    </LanguageProvider>
  )
}

interface LanguageContextProps {
  language: string
  onLanguageChange(lang: string): void
}
const LanguageContext = createContext<LanguageContextProps>({
  language: "english",
  onLanguageChange: (_lang: string) => {},
})

export const LanguageProvider = LanguageContext.Provider
export const LanguageConsumer = LanguageContext.Consumer

export default LanguageContext
