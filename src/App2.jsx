import { Link, Route, Routes } from 'react-router-dom';
import './App2.css';
import New from './Component/New';
import Editor02 from './Component/Editor02';
import Home from './Component/Home';


function App() {
  
  return (
    
    <div className='App'>
      <div className='link'>
        <Link to={'/'}>Home</Link>
        <Link to={'/new/?name=홍길동&age=20'}>New</Link>
        <Link to={'/editor/2'}>Editor</Link>
      </div>
      <div className='link'>
        <a href="/">Home</a>
        <a href="/new">New</a>
        <a href="/editor">Editor</a>
      </div>
      <Routes>
        {/* <Route path = '/경로' element={컴포넌트}/> */}
        <Route path='/' element ={<Home />} />
        <Route path='/new' element ={<New />} />
        <Route path='/editor/:id' element ={<Editor02 />} />
      </Routes>      
    </div>
  );
}

export default App
