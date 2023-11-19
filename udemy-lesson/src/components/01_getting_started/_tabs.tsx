import { IndexProps } from "./_props";
import { content } from "./_const";
import TabsMenu from "./__tabs_menu";
import TabsContent from "./__tabs_content";

// export default function Tabs({
//   activeContentIndex,
//   setActiveContentIndex,
// }: Partial<IndexProps>) {
//   return (
//     <div id="tabs">
//       <TabsMenu activeContentIndex={activeContentIndex} setActiveContentIndex={setActiveContentIndex} />
//       <TabsContent activeContentIndex={activeContentIndex}/>
      
//     </div>
//   );
// }


export default function Tabs() {
  console.log("Re-rendering Tab")
  return (
    <div id="tabs">
      <TabsMenu/>
      <TabsContent/>
      
    </div>
  );
}