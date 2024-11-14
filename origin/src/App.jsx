import Titulo from "./Titulo.jsx"
import axios from "axios";
import "./App.css"
import { useEffect, useState } from "react";

const Api = axios.create({
    baseURL: "http://localhost:8080/"
})

function App() {
    const [contador, setContador] = useState(1);
    const [nome, setNome] = useState();
    const [email, setEmail] = useState("guilherme.emanuel@sistemafiep.org");

    const [alunos, setAlunos] = useState();

    useEffect(()=>{
        Api.get("aluno").then((response)=>{
            console.log(response.data)
            setAlunos(response.data[0].nome)
        })
    },[])



    return (
        <>
            <Titulo />
            <h2>{contador}</h2>
            <button onClick={() => {
                setContador(contador + 1)
            }}>+</button>
            <button onClick={() => {
                setContador(contador - 1)
            }}>-</button>

            <h1>Cadastro</h1>

            <ol>
                {alunos.map((item)=>(
                    <li>{item.nome}</li>
                ))}
            </ol>

            
            {nome} - {email}
            <div>
                <input type="text" 
                    placeholder="Nome" 
                    onChange={(e)=>{
                        setNome(e.target.value)
                    }}/>

                <input type="email" 
                placeholder="E-mail"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            </div>
            
        </>
    )
}

export default App