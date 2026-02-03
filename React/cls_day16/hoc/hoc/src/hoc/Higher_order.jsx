const Higher_order = (WrappedComponents)=>(props)=>{

  return(
      <WrappedComponents {...props}/>
  )
}
export default Higher_order;