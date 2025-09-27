import { useState } from 'react'
import FirstPage from './components/pages/firstPage'
import HomePage from './components/pages/homePage'
function App() {
  const [searchedProduct, setSearchedProduct] = useState("")
  const [isHomePage, setIsHomePage] = useState(false);
  return (
    <>
      <div className='w-screen h-full font-varela flex flex-col items-center justify-center '>
        {isHomePage ? <HomePage searchedProduct={searchedProduct} setSearchedProduct={setSearchedProduct}/> : <FirstPage selectedProduct={searchedProduct} setSelectedProduct={setSearchedProduct} setIsHomePage={setIsHomePage}/>}
      </div>
    </>
  )
}

export default App
