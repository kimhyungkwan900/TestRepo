import { createRoot } from 'react-dom/client'
import './index.css'
import App2 from './App2.jsx'
import {BrowserRouter} from 'react-router-dom'
//BrowserRouter : 브라우저의 주소 변경을 감지하는 기능 컴포넌트가 페이지를 구성하고 이동하는데 필요한 다양한 기능을 제공

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App2 />
  </BrowserRouter>
)
