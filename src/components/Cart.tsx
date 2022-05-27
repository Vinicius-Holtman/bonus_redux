import { useSelector } from "react-redux"



export function Cart() {
  const state = useSelector(state => state)

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}