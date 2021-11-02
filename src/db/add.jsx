import React from 'react'
import { db } from './firestore.jsx'

async function Add(name, points){
    const user = {
        name:name,
        points:points
    }
    try{
       const date = db.collection("users").add(user)
       console.log("guardado")

    }
    catch(e){
        console.log(e)
    }
    return console.log("exelente")
}

export default Add