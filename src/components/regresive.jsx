import React, {useState, useEffect, useCallback} from 'react'

function Regresive(Props) {
    const {resultado, setP, p, setResult} = Props
    let [time,setTime] = useState(30)
 
useEffect(()=>{
    if(time == 0){
        setResult([...resultado, "false"])
     }
    },[time])


useEffect(()=>{
    let intervalo = null;
    if( p == "no"){
        intervalo = window.setInterval(()=>{
            if(time && p){
                if(time == -1){
                    time = 30
                }
            } 
    return setTime(time--)
        }
    ,1000)
    } else {
        clearInterval(intervalo)
        setTime(30)
        setP("no")
    }
    return ()=> clearInterval(intervalo)
},[p])

    return (
        <div>
            <h2 className="reloj">{time}</h2>
        </div>
    )
}

export default React.memo(Regresive)
