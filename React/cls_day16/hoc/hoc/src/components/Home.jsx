import Button from "./Button";
import Higher_order from "../hoc/Higher_order"
const Movie = Higher_order(Button)
const Home =()=>{

  return(
    <>
    <Movie text = "Jaga"/>
    <Button text = "Jagan"/>
    </>
  )
}
export default Home;