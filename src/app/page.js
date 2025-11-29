
import Main from "./pages/Main";
import SpecificCard from "./components/SpecificCard";

export default function Home({ params }) {
  const { id } = params;
  return (
  <div className="bg-white w-[1440pxw] h-[4400px]">
    <Main />
    <SpecificCard productId={id} />
  </div>
  );
}

