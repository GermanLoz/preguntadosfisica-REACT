import React, {useState, useEffect,useCallback,useContext} from 'react'
import UserContext from './contex.jsx'
import Add from './db/add.jsx'
import {db} from './db/firestore.jsx'

function User() {
    const [user, setUser] = useState()
    const [ranking, setRanking] = useState()
    const [guardado, setGuardado] = useState(false)

    const jugador = useContext(UserContext)

    useEffect(()=>{
            setUser(jugador)
    }, [jugador])

    const guardar = ()=>{
                 if(user){
                    if( guardado == false){
                        setGuardado(true) 
                        Add(user.name, user.puntaje)
                    }
             }
        }

        useEffect(()=>{
            guardar()
        },[user])



useEffect(()=>{
    const getUsers = async()=>{
            const { docs } = await db.collection("users").orderBy("points", "desc").get()
            const user = docs.map( item => ({name:item.name, ...item.data() }) )
            setRanking(user)
    }
    getUsers()
},[guardado])


    return (
        <div className="puntaje">
            <h2 className="h2">RANKING</h2>
            <div className="tabla">
        <table>
            <tr>
                <td className="c">Nombre</td>
                <td className="c">Puntaje</td>
            </tr>
            {
                ranking ?
                ranking.map(item =>{
                    return <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.points}</td>
                           </tr>
                })
                : " "

            }
            </table>
            </div>
        </div>
    )
}

export default React.memo(User)
