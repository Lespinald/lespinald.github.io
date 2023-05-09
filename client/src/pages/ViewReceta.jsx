import React, { useEffect, useState } from 'react'
import RecetaAmpliada from '../Components/viewReceta/RecetaAmpliada'

import { useParams } from 'react-router-dom'

const ViewReceta = (props) => {
  const id = useParams().recetaid;

  const [receta, setReceta] = useState({})
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recetas/id/${id}`)//ruta de la api
    .then(response => response.json())
    .then(datos => setReceta(datos[0]))
  }, [id])

  useEffect(() => {
    fetch(`http://localhost:5000/api/ingredienteAsociado/recetaid/list/${id}`)//ruta de la api
    .then(response => response.json())
    .then(datos => setIngredientes(datos))
  }, [id])

  return (
    <div style={{display: 'contents'}}>
      <RecetaAmpliada receta={receta} ingredientes={ingredientes}/>
    </div>
  );
}

export default ViewReceta
