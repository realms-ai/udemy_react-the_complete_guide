import { Dispatch, SetStateAction } from "react"

export type IndexProps = {
  activeContentIndex: number,
  setActiveContentIndex: Dispatch<SetStateAction<number>>
}
