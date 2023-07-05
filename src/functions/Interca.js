import { useState } from "react"

export function useInteract (){
    const [message, setMessage] = useState({title: "", body: ""})
    function Interact(tipo){
        const tipos ={
            3: 'Fonte',
            2: "Missão",
            1: "Email",
            0: "Limpo"
        }
        if(tipos[tipo] == "Fonte"){
            setMessage( {title: "Fonte\n",body:"Resfresque-se e Hidrate-se, não deixe de beber água."})
        }
        if(tipos[tipo] == "Missão"){
            setMessage( {title: "Missão\n",body:"Quadro Com Missões e tarefas, ainda sem funcionar"})
        }
        if(tipos[tipo] == "Email"){
            setMessage( {title: "Email\n",body:"Ainda não estamos funcionando."})
        }
        if(tipos[tipo] == "Limpo"){
            setMessage( { title: "",body: "" } )
        }
    }
    function getMessage(){
        return message;
    }

    return {
        getMessage,
        Interact
    }
}