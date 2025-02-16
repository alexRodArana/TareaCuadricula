import Square from "./components/Square";

export default function Tarea() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 grid-rows-3">
        <Square color="white"/>
        <Square color="black"/>
        <Square color="white"/>
        <Square color="black"/>
        <Square color="white"/>
        <Square color="black"/>
        <Square color="white"/>
        <Square color="black"/>
        <Square color="white"/>
      </div>
    </div>
  );
}