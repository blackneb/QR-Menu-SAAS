import Navbar from "./components/navbar/Navbar";
import Routing from "./components/routing/Routing";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <Routing/>
      </div>
    </>
  );
}

export default App;
