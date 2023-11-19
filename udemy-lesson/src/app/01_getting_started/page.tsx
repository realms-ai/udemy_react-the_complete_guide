'use client'

import { createContext, useCallback, useEffect, useMemo, useReducer, useState } from "react";
import Index from "@/components/01_getting_started";

interface contextType {
  activeContentIndex: number,
  setIndex: (n: number) => void,
  counter: number
}
export const ContentIndexContext = createContext<Partial<contextType>>({})

export default function GettingStarted() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  // UseState is not a good option here if passed as props or context value to children
  // instead use **** useReducer **** for the same 

  type CounterState = {
    counter: number
  }

  type Dispatcher = {
    type: string
  }

  function reducer (state: CounterState, action: Dispatcher): CounterState {
    return {
      counter: state.counter+1
    }
  } 

  const [state, dispatch] = useReducer(reducer, { counter: 0 })


  // const incrementCounter = () => {
  //   console.log("Incrementing Counter")
  //   setInterval(() => {
  //     console.log("Counter increased")
  //     setCounter(counter++)
  //   }, 1000)
  // }

  useEffect (() => {
    console.log("Use Effect Again: ")
    // incrementCounter()
    setInterval(() => {
      dispatch({type: ''})
    }, 1000)
    
  }, [])

  

  // Use Public Function to change state defined in the function
  // const setIndex = (value: number) => {
  //   console.log("I am setting Index: ", value)
  //   setActiveContentIndex(value)
  // }
  
  const setIndex = useCallback((value: number) => {
    console.log("I am setting Index: ", value)
    setActiveContentIndex(value)
  }, [])
  // Passing props to children which don't need them will result in 
  // **** PROP DRILLING ****

  /*
  return (
    <Index activeContentIndex={activeContentIndex} setActiveContentIndex={setActiveContentIndex} />
  )
  */

  // To avoid PROP DRILLING 
  // Use CONTEXT
  // To optimize memory, use 
  // useCallback for functions passed as dependencies 
  // and useMemo for context value 
  
  const contextValue = useMemo(() => ({
    activeContentIndex,
    setIndex,
    counter: state.counter,
  }), [activeContentIndex])


  // const contextValue = {
  //   activeContentIndex,
  //   setIndex,
  //   counter
  // }


  return (
    <ContentIndexContext.Provider value={contextValue}>
      <Index />  
    </ContentIndexContext.Provider>
  )
}