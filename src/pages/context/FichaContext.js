import React, { createContext, useState } from 'react'

export const FichaContext = createContext()

export const FichaProvider = ({ children }) => {
  const [fichas, setFichas] = useState([])
  const [image, setImage] = useState(null) // Adicione um estado para a imagem

  const addFicha = (ficha) => {
    setFichas([...fichas, ficha])
  }

  const updateFicha = (updatedFicha) => {
    setFichas(fichas.map((f) => (f.id === updatedFicha.id ? updatedFicha : f)))
  }

  const removeFicha = (id) => {
    setFichas(fichas.filter((f) => f.id !== id))
  }

  return (
    <FichaContext.Provider
      value={{ fichas, addFicha, updateFicha, removeFicha, image, setImage }}
    >
      {children}
    </FichaContext.Provider>
  )
}
