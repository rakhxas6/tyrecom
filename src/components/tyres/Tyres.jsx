import SelectorSidebar from "./SelectorSidebar";
import TyresSection from "./TyresSection";

const Tyres = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto px-6 pt-32 pb-12 md:px-16  gap-6 ">
      {/* Sidebar */}
      <div className="md:w-[25%]">
        <SelectorSidebar />
      </div>

      {/* Tyres list */}
      <div className="md:w-[75%]">
        <TyresSection />
      </div>
    </div>
  );
};

export default Tyres;
