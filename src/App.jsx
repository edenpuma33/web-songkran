import ShowMap from "./ShowMap"
import Header from "./Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import ArcGISMap from "./arcgisMap";

const App = () => {
  return (
    <div>
      <Header/>
      <ShowMap/>
      {/* <ArcGISMap/> */}
    </div>
  )
}
export default App