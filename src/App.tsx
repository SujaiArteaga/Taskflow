//  import { useState } from "react";
// import Header from "./Header";

// function App() {

//   const[contador,setContador]=useState(0);

// console.log("Render App -> contador:", contador);

//   return (
//     <div>
//      <Header title="Mi lista de tareas" subtitle="Aprendiendo React paso a paso"  />
    
//     <h2> Contador:{contador}</h2>

//      <button onClick={() => {
//         setContador(contador + 2);
//       }}>
//         Sumar
//       </button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [tareas] = useState([
//     "Aprender React",
//     "Hacer ejercicio",
//     "Estudiar TypeScript",
//     "Hacer una aplicacion con React"
//   ]);
  
//   return (
//     <div>
//       <h1>TaskFlow</h1>

//       <ul>
//         {tareas.map((tarea,index) => (
//           <li key={index}>{index}.{tarea}</li>
//         ))}
        
//       </ul>
//     </div>
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Layout from "./Components/Layout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;



