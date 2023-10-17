import { useRoutes, BrowserRouter } from 'react-router-dom' 
import { Providers } from "../../redux/providers";
import { ReactNode } from 'react'
import  Home from '../Home'
import Navbar from '../../Components/Navbar'

type Props = {
  children?: ReactNode
}

const AppRoutes = () =>{
  let routes = useRoutes([
    { path:'/', element: <Home/> },
    { path:'/About', element: <Home/> },
  ])
  return routes
}

const App = (props: Props) => {

  return (
    <div className='flex flex-col items-center mt-20'>
      <BrowserRouter>
        <Navbar />
        <AppRoutes/>
        <Providers>
          {props.children}
        </Providers>
      </BrowserRouter>
    </div>
  )
}

export default App