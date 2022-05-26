import { useSelector, useStore } from "react-redux"

export function Catalog() {
  const catalog = useSelector(state => state)

  console.log(catalog)

  return (
    <h1>Catlog</h1>
  )
}