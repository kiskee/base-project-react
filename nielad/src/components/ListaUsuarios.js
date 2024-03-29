import axios from 'axios'
import React, {useEffect, useState} from 'react'
import UsuarioIndividual from './UsuarioIndividual'
function ListaUsuarios(){

    const[datausuarios, setdatausuario]=useState([])

    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios').then(res => {
            setdatausuario(res.data)          
        }).catch(err => {
            console.log(err)
        })
      
    }, [])

    //Mapear listadeusuario en objeto usuario
    const listausuarios = datausuarios.map(usuario => {
        return(
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    })


    return(
        <div>
            <h2>List of Users</h2>
            {listausuarios}
        </div>
    )
}

export default ListaUsuarios