import './App.css'
import Card from './components/card/Card'

export default function App() {
  return (
    <div>
      <Card title="t-shirt" price="30$" rating="3.5" discount={14} />
   </div>
  )
}

