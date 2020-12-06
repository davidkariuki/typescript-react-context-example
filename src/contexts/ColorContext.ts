import { createContext } from "react"

const ColorContext = createContext("red")

export const ColorProvider = ColorContext.Provider
export const ColorConsumer = ColorContext.Consumer

export default ColorContext
