import './App.scss';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {getCharacters} from './features/character/thunks';

import SearchForm from './components/SearchForm/SearchForm';


function App() {

 const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getCharacters())
  },)



  return (
    <div className="App">
      <div className="container my-3">
          <h3 className="title">CHALLENGE FRONTEND</h3>
      <div className="container-search">
        <SearchForm/>
      </div>
        
      </div>
    </div>
  );
}

export default App;
