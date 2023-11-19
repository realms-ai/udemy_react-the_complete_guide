import { memo, useContext } from "react";
import { IndexProps } from "./_props";
import { ContentIndexContext } from "@/app/01_getting_started/page";

const TabsMenu = ({
  // activeContentIndex,
  setActiveContentIndex,
}: Partial<IndexProps>) => {
  const {activeContentIndex, setIndex} = useContext(ContentIndexContext)
  console.log("Re-rendering Tab MENU")
  return (
    <menu>
    <button
      className={activeContentIndex === 0 ? "active" : ""}
      onClick={() => setIndex(0)}
    >
      Why React?
    </button>
    <button
      className={activeContentIndex === 1 ? "active" : ""}
      onClick={() => setIndex(1)}
    >
      Core Features
    </button>
    <button
      className={activeContentIndex === 2 ? "active" : ""}
      onClick={() => setIndex(2)}
    >
      Related Resources
    </button>
    <button
      className={activeContentIndex === 3 ? "active" : ""}
      onClick={() => setIndex(3)}
    >
      React vs JS
    </button>
  </menu>
  )
}

export default TabsMenu