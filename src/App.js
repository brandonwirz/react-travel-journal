import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"
import "./style.css"

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />
  })

  return (
    <div>
      <Nav />
      <div className="">{cards}</div>
    </div>
  )
}
