import SelectorSidebar from "./SelectorSidebar";
import TyresSection from "./TyresSection";

const Tyres = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-4 py-10 ">
      <SelectorSidebar/>
      <TyresSection />
    </div>
  );
};

export default Tyres;
