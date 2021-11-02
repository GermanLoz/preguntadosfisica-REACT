import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

function Formulario(Props){
    const {setUser} = Props
    const [nombre, setNombre] = useState('')
    const [error, setError] = useState('')
    const historial = useHistory()


    const validate = (e)=>{
        e.preventDefault()
        if(nombre && nombre.length > 3){
            setUser(nombre)
            historial.push('/questions')
        } else {
            setError("minimo de caracteres 3")
            setTimeout(()=>{
                setError("")
            }, 1000)
        }
    }
    return (
        <>
                    <div className={error ? "error" :" "}>
                    <p className="e">{error}</p>
                </div>
                <p className="dev">dev German Lozickyj</p>
            <div className="form">
                <form onSubmit={(e)=>{validate(e)}}>
                    <input onChange={(e)=>{setNombre(e.target.value)}} type="text" placeholder="Escribe tu nombre"></input>
                    <input type="submit" id="submit" value="Seguir"/>
                </form>
            </div>
           </>
    )
}

export default React.memo(Formulario)