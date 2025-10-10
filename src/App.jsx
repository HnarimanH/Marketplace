import { useState } from 'react'
import FirstPage from './components/pages/firstPage'
import HomePage from './components/pages/homePage'
import SignPage from './components/pages/signPage'
function App() {
  const [searchedProduct, setSearchedProduct] = useState("")
  const [currentPage, setCurrentPage] = useState("first");
  return (
    <>
      <div className="w-screen h-screen font-varela flex flex-col items-center justify-center scroll-hidden">
        {currentPage === "first" && (
          <FirstPage 
            setCurrentPage={setCurrentPage}
            selectedProduct={searchedProduct}
            setSelectedProduct={setSearchedProduct}
          />
        )}
        {currentPage === "home" && (
          <HomePage 
            searchedProduct={searchedProduct}
            setSearchedProduct={setSearchedProduct}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "sign" && (
          <SignPage 
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  )
}

export default App
