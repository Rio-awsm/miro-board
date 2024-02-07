import Canvas from './_components/Canvas'

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
};

const BoardIdpage = ({params,} : BoardIdPageProps) => {
  return (
    <div>
      <Canvas boardId = {params.boardId} />
    </div>
  )
}

export default BoardIdpage
