import React, {useState, useEffect, useContext} from 'react'
import einsteind from './img/einsteind.png'
import Preguntas from './components/preguntas.jsx'
import {data} from './components/data.jsx'
import Regresive from './components/regresive.jsx'
import UserContext from './contex.jsx'
import { useHistory } from 'react-router-dom';

function Inicio() {
    const [resultado, setResult] = useState(["check"])
    const [play, setPlay] = useState(false)
    const [number, setNumber] = useState(0)
    const [card, setCard] = useState([])
    const [p, setP] = useState("no")

    const jugador = useContext(UserContext)
    const historial = useHistory()


    useEffect(()=>{
        const numero = resultado.length
        if(number == 0){
            setNumber(1)
        } else {
            setNumber(numero)
        }
        if(numero == 11){
            const point = resultado.filter( resultado => resultado === "correct").length
            if(point){
                jugador.puntaje = point
                historial.push('/result')
            }
        }
    }, [resultado])

    useEffect(()=>{
        const datos = data[number]
        if(datos){
            setCard([datos])
        }
    }, [number])


    return (
        <div className="inicio-cont">
            <img className="albert"src={einsteind}/>
            <h1 className="title-inicio">Preguntas sobre fisica, evalua tu nivel de conocimiento</h1>
            <p>Tienes 30 segundos para cada pregunta al final te mostraremos tu puntaje!!</p>
            <button onClick={(e)=>setPlay(true)} 
            className="start">Start</button>
        <div className={play == true ? "cont" : " " }>
            {
             p && play == true ?  <Regresive number={number} p={p} setP={setP} resultado={resultado}  setP={setP} setResult={setResult}/>
             : " "
            }
              {
               card && play == true ?
               card.map((item)=>{
            return  <Preguntas 
                       key={item.question}
                       preg={item.question} correct={item.correct}
                       resultado={resultado} setResult={setResult} 
                       img={item.image}
                       setP={setP}
                       one={item.optionOne} two={item.optionTwo} tree={item.optionTree} four={item.optionFour}/>
               })
              : " " 
            }     
            </div>
        </div>

    )
}

export default Inicio
