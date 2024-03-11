import {Route,Routes} from "react-router-dom"
import Landing from "./Components/Landing/Landing"
import ComingSoon from "./Components/Landing/ComingSoon"
function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/comingsoon" element={<ComingSoon/>}></Route>
     </Routes>
    </>
  )
}

export default App
