import './App.scss'

import Home from './pages/Home'

const props = {
	title: "Welcome",
	description: `[ "Vite", "TypeScript", "React", "SASS" ]`
}

function App() {
  return (
    <div className="App">
			<Home title={props.title} description={props.description}/>
    </div>
  )
}

export default App
