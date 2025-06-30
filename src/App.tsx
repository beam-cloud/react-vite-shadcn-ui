import CountBtn from "@/components/count-btn";
import ReactSVG from "@/assets/react.svg";
import { Badge } from "@/components/ui/badge";

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full min-h-0">
      <div className="flex flex-col items-center gap-y-4 p-4">
        <div className="inline-flex items-center gap-x-4">
          <img src={ReactSVG} alt="React Logo" className="w-24 md:w-32" />
          <span className="text-4xl md:text-6xl">+</span>
          <img src={"/vite.svg"} alt="Vite Logo" className="w-24 md:w-32" />
        </div>
        <a
          href="https://ui.shadcn.com"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Badge variant="outline">shadcn/ui</Badge>
        </a>
        <CountBtn />
      </div>
    </main>
  );
}

export default App;
