import Head from 'next/head'
import Link from 'next/link'
import ItemCard from '../components/ItemCard'
import { ItemContext, useItems } from '../context/ItemContext'
import { useUser } from '../context/UserContext'

export default function Home() {
  /* Get access to the User Context 
   * In this case, we don't need the u
   */
  const { user, setUser } = useUser()

  const { items, setItems } = useItems()

  const addToCart = (itemName) => {
    setUser(user.name, user.cart.push(itemName))
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="top">
        <h1>Hey there, {user.name}</h1>
        <Link href="/cart" >
          <div class="cart">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        </div>
        </Link>
        </div>
        <div class="gallery">
          {
            items.map(item => (
              <ItemCard
                name = {item.name}
                img = {item.img}
                stock = {item.stock}
                price = {item.price}
                add = { addToCart }
              >
              </ItemCard>
            ))
          }
        </div>
      </main>
    </div>
  )
}
