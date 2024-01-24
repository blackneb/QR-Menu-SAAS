import Login from "./components/auth/Login"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"

function App() {

  return (
    <>
      <div className="flex flex-row">
        <Navbar/>
        <Login/>
      </div>
    </>
  )
}

export default App
