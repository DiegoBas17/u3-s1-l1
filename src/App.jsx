
import "./App.css";
import CreateButton from "./ButtonComponent";
import ImageComponent from "./ImageComponent";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ImageComponent srcImg="https://images.unsplash.com/photo-1718465350900-096470ddbef7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" altImg="naveNellaNeve" widthImg="100%"/>
      <CreateButton textButton="Premi qui" classes="btn btn-dark"/>
    </div>
  );
}

export default App;
