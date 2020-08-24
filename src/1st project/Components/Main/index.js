import React from "react"
import { Content, Sidebar } from '../../Components'
import './main.css'

const Main = () => (
    <div className="main">
        <Sidebar/>
        <Content/>
    </div>
)

export { Main }