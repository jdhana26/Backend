import React from 'react'
import Hooks from './Hooks'
import FetchTask from './FetchTask'
import ProductFilter from './ProductFilter'
import AdvancedHook from './AdvancedHook'
// import AdvancedHooks from './AdvancedHooks'

const App = () => {
  return (
    <>
    <Hooks/>
    <FetchTask />
    <ProductFilter />
    <AdvancedHook/>    {/* <AdvancedHooks /> */}
    
    </>
  )
}

export default App