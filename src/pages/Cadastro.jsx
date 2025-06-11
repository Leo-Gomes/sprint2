import axios from 'axios';
import React, { useState } from 'react'

export const Cadastro = () => {
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensagem, setMensagem] = useState('');

    async function handleCadastro (event) {
        event.preventDefault()
        try {
            
            const resposta = await axios.post('http://localhost:3000/v1/user/register', {
                firstname,
                surname,
                email,
                password
            });
            setMensagem(`Usuário ${resposta.data.firstname} cadastrado com sucesso!`)
            setFirstname('');
            setSurnamename('');
            setEmail('');
            setPassword('');
        } catch (error) {
            setMensagem(error.response?.data?.erro || 'Erro ao cadastrar usuário')
        }
    }
  return (

    <>
    <h1 className='font-bold text-center p-3 text-2xl'>Cadastro</h1>
    <form onSubmit={handleCadastro} className='flex flex-col gap-4 mx-auto w-[35%]'>
        <input type="text" placeholder='Digite seu primeiro nome' required 
        value={firstname} 
        onChange={e => setFirstname(e.target.value)}
        className='border p-2 rounded-md'/>

        <input type="text" placeholder='Digite seu ultimo nome' required 
        value={surname} 
        onChange={e => setSurname(e.target.value)}

        className='border p-2 rounded-md'/>

        <input type="email" placeholder='Email' required 
        value={email} 
        onChange={e => setEmail(e.target.value)}

        className='border p-2 rounded-md'/>

        <input type="password" placeholder='Senha' required 
        value={password} 
        onChange={e => setPassword(e.target.value)}

        className='border p-2 rounded-md'/>

        <button className='bg-blue-500 hover:bg-blue-500/80 p-2 rounded-md w-[50%] mx-auto text-white'>Cadastrar</button>

    </form>
    {mensagem && <p className='text-center mt-4'>{mensagem}</p>}
    </>
)
}
