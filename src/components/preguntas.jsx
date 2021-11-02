import React,{useCallback, useState} from 'react'

function Preguntas(Props){
    const {preg,setP, img, one, two, tree, four, correct, setResult, resultado} = Props
    const [style, setStyle] = useState('null')
    const comprobacion = (e)=>{
        if(e.id === correct){
            setStyle("correctt")
            setTimeout((e)=>{
                setP(true)
                setResult([...resultado, "correct"])
            },1000)
        }
        else{
            setStyle("style")
         setTimeout((e)=>{
                setP(true)
                setResult([...resultado, "false"])
        },1000)
        }
    }
    return (
                <div className="card">
                    <div className="folder"></div>
                    <p id="preg">{preg}</p>
                    <img src={img}/>
                 <div className="questions">
                    <p>A: {one}</p>
                    <p>B: {two}</p>
                    <p>C: {tree}</p>
                    <p>D: {four}</p>
                </div>
                <div className="buttons">
                    <button className={style} onClick = {(e)=>{comprobacion(e.target)}}
                            id="a"
                     >A</button>
                    <button className={style} onClick = {(e)=>{comprobacion(e.target)}}
                            id="b"
                     >B</button>
                    <button className={style} onClick = {(e)=>{comprobacion(e.target)}}
                            id="c"
                     >C</button>
                    <button className={style} onClick = {(e)=>{comprobacion(e.target)}}
                            id="d"
                     >D</button>
                </div>
            </div>
    )
}

export default Preguntas