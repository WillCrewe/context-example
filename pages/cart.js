import Head from 'next/head'
import ItemCard from '../components/ItemCard'
import { useUser } from '../context/UserContext'

export default function Checkout() {
  const { user, setUser } = useUser()


  let totalPrice = 0

  return (
    <div>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{user.name}, let's checkout!</h1>
        <p>You have {user.cart.length} items in your cart.</p>
        <div>
          {
            user.cart.map(item => (
              <ItemCard
                name = {item.name}
                img = {item.img}
                stock = {item.stock}
                price = {item.price}
                add = {item.add}
              >
                {totalPrice+=item.price}
              </ItemCard>
            ))
          }
        </div>
      <p>Total Cart Price: ${totalPrice}</p>
      </main>
    </div>
  )
}
