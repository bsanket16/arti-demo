import './App.css'

import { Header } from './Components/Header'
import { Design } from './Components/Design'
import { Content } from './Components/Content'

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        <Design />
        <Content />
      </div>
    </>
  )
}

export default App
