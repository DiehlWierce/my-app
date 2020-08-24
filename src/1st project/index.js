import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import { App } from './Components'

const root = document.getElementById('root')

ReactDOM.render(<App/>, root)


let app = (
		<div>
			<div>Hello World!</div>
			<div>I wanna be with u, guys!</div>
		</div>
	)

let HelloWorld = () => (
	<div>
		<Hello/>
		<World/>
	</div>
)
let Hello = () => (
	<span className="hello">Hello</span>
)

let World = () => (
	<span className="world"> World!</span>
)

ReactDOM.render(app, root)
ReactDOM.render(<HelloWorld/>, root)
