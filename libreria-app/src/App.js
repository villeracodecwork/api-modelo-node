import React, { Fragment,useState ,useEffect} from "react";
import Navbar from "./components/Navbar";
import ListaItems from "./components/ListaItems";


function App() {

  const [libros,setLibros]= useState([])

  useEffect(() => {
    const getLibros=()=>{

      fetch('http://localhost:9000/api',)
      .then(res=>res.json())
      .then(res=>setLibros(res))

    }
    getLibros()
  }, [])
  



  

  return (
    <Fragment>
      <Navbar brand="Libreria App"></Navbar>

      <div className="container-fluid">
        <div className="row">
          <div className="col-7 ">
            <h2 style={{textAlign:'center'}}>Lista de Libros</h2>
            <ListaItems libros={libros}></ListaItems>
          </div>
          <div className="col-5">
            <h2  style={{textAlign:'center'}}>Operaciones de Registro</h2>
            </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
