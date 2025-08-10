import SelectorSidebar from "./SelectorSidebar";
import TyresSection from "./TyresSection";

const Tyres = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto px-10 py-5 md:px-20 md:py-10 gap-6 ">
      {/* Sidebar */}
      <div className="md:w-[30%]">
        <SelectorSidebar />
      </div>

      {/* Tyres list */}
      <div className="md:w-[70%]">
        <TyresSection />
      </div>
    </div>
  );
};

export default Tyres;
