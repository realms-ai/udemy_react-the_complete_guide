import { ContentIndexContext } from "@/app/01_getting_started/page";
import { content } from "./_const";
import { IndexProps } from "./_props";
import { useContext } from "react";
import TabsCounter from "./__tabs_counter";



export default function TabsContent(
  // {activeContentIndex}: Partial<IndexProps>
  ) {
  const {activeContentIndex} = useContext(ContentIndexContext)
  console.log("Re-rendering Tab CONTENT")
  return (
    <div id="tab-content">
    <TabsCounter/>
    <ul>
      {content[activeContentIndex as number].map((item: string) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
  )
}