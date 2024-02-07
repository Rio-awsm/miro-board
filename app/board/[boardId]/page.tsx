import { Room } from "@/components/room";
import Canvas from "./_components/Canvas";
import { CanvasLoading } from "./_components/canvas-loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdpage = ({ params }: BoardIdPageProps) => {

  return (
    <Room roomId={params.boardId} fallback={<CanvasLoading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdpage;
