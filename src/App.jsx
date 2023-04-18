import { 
	createBrowserRouter, 
	createRoutesFromElements, 
	Route, 
	RouterProvider 
} from 'react-router-dom'
import Home from "./pages/Home"
import Reserve from "./pages/Reserve"
import Menu from "./pages/Menu"
import About from "./pages/About"

import Layout from "./components/Layout"

import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Layout />}>
		<Route index element={<Home />} />
		<Route path='reserve' element={<Reserve />} />
		<Route path='menu' element={<Menu />} />
		<Route path='about' element={<About />} />
	</Route>
))

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App
