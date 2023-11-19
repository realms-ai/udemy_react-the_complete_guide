import { ContentIndexContext } from "@/app/01_getting_started/page"
import { useContext, useEffect, useState } from "react"


export default function TabsCounter() {
  let [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setInterval(() => {
      // console.log("Counter increased")
      setCounter(counter++)
    }, 1000)
  }

  useEffect(() => {
    console.log("Counter Use Effect")
    console.log('Re-rendering Tab COUNTER')
    incrementCounter()
  }, [])

  // const {counter} = useContext(ContentIndexContext)
  console.log('Re-rendering Tab COUNTER')
  return (
    <p>Counter: {counter}</p>
  )
}