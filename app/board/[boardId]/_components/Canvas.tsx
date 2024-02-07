"use client"

import { useSelf } from "@/liveblocks.config"
import Info from "./Info"
import Toolbar from "./Toolbar"
import Participants from "./participants"


interface CanvasProps {
  boardId: string;
};

const Canvas = ({boardId} : CanvasProps) => {

  const info = useSelf((me) => me.info)

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  )
}

export default Canvas
