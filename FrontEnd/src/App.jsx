import './App.css'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:30001',  //http://localhost:30001
})


function App() {

  api.get('/usuarios').then((response) => {
    console.log(response.data)
  })


  return (
    <div>
      <h1>Usuários</h1>
    </div>
  )
}

export default App

// lembra para para entrar no servidor: npm run dev
