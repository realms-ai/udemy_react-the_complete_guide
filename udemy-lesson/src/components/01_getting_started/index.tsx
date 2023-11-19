import Header from "./_header";
import { IndexProps } from "./_props";
import Tabs from "./_tabs";
import "../../styles/01_getting_started.css"
import { memo } from "react";

/* 
// To avoid PROP DRILLING
export default function Index({
  activeContentIndex,
  setActiveContentIndex,
}: Partial<IndexProps>) {
  return (
    <div>
      <Header />
      <Tabs activeContentIndex={activeContentIndex} setActiveContentIndex={setActiveContentIndex} />
    </div>
  );
}
*/

const Index = memo(() => {
  console.log("Re-rendering INDEX")
  return (
    <div>
      <Header />
      <Tabs />
    </div>
  );
})

export default Index