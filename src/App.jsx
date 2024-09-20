import './App.css'
import Card from './components/card/Card'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/home/HomePage'
import Footer from './components/footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer/>
    </div>
  )
}

