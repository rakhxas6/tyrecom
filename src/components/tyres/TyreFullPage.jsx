import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { useNavigate } from "react-router-dom";
import { contactOptions } from "../../constants/Product";
import { useTyres } from "../../context/TyreContext";
import RelatedProducts from "./RelatedProducts";
import Breadcrumb from "../BreadCrumb";

const TyreFullPage = () => {
  const navigate = useNavigate();
  const { selectedTyre } = useTyres();

  if (!selectedTyre) {
    // If user comes directly to this page without selecting a tyre
    return (
      <div className="text-center mt-8 h-screen items-center justify-center flex flex-col">
        <p>Tyre not found.</p>
        <button
          onClick={() => navigate("/tyres")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const tyre = selectedTyre;

  return (
    <section className="mx-auto px-6 pt-32 pb-12 md:px-16  space-y-6">
      <div className="dataContainer grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="imgContainer max-w-full mx-auto shadow-lg border border-orange-300">
          {tyre.imageUrl ? (
            <InnerImageZoom
              src={tyre.imageUrl}
              zoomSrc={tyre.imageUrl}
              alt={tyre.name}
              zoomType="hover"
              zoomPreload={true}
              fullscreenOnMobile={true}
              className="block"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center ">
              <p className="text-gray-500">No Image Available</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="infoContainer w-full space-y-8 border border-orange-300 p-6 mx-auto shadow-md">
          <Breadcrumb />
          {/* Tyre Information */}
          <div className="tyreInformation space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 uppercase">
              {tyre.name}
            </h2>
            <p className="text-sm text-gray-400 italic">
              <span>Category:</span> {tyre.category}
            </p>

            {/* Info Table */}
            <dl className="divide-y divide-gray-200 text-gray-700 text-base">
              <div className="flex justify-between bg-gray-50 px-4 py-2">
                <dt className="font-semibold">Brand:</dt>
                <dd>{tyre.brand}</dd>
              </div>

              <div className="flex justify-between bg-white px-4 py-2">
                <dt className="font-semibold">Diameter:</dt>
                <dd>{tyre.rimDiameter} Inch</dd>
              </div>

              <div className="flex justify-between bg-gray-50 px-4 py-2">
                <dt className="font-semibold">Width:</dt>
                <dd>{tyre.width}</dd>
              </div>

              <div className="flex justify-between bg-white px-4 py-2">
                <dt className="font-semibold">Aspect Ratio:</dt>
                <dd>{tyre.aspectRatio}</dd>
              </div>
            </dl>
          </div>

          {/* Contact Section */}
          <div className="connectWithUs">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Connect with us
            </h2>
            <div className="cta grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  target={option.target}
                  rel={option.rel}
                  className={`px-6 py-3 ${option.bg} text-white font-medium shadow-md  flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105`}
                >
                  {option.icon}
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </section>
  );
};

export default TyreFullPage;
