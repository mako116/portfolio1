import './App.css';
import MyRoutes from './MyRoutes/MyRoutes';
import Loader from './Loading/loader';

function App() {
  return (
    <>
      <Loader/>
      <div className="App">
        <MyRoutes />
    </div>
    </>
   
  );
}

export default App;
