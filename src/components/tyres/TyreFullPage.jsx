import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { useNavigate } from "react-router-dom";
import { contactOptions } from "../../constants/Product";
import { useTyres } from "../../context/TyreContext";

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
    <section className="mx-auto p-6">
      <div className="dataContainer grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="imgContainer mb-6 max-w-full mx-auto rounded-lg shadow-md">
          {tyre.imageUrl ? (
            <InnerImageZoom
              src={tyre.imageUrl}
              zoomSrc={tyre.imageUrl}
              alt={tyre.name}
              zoomType="hover"
              zoomPreload={true}
              fullscreenOnMobile={true}
              className="rounded-lg"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
              <p className="text-gray-500">No Image Available</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="infoContainer space-y-10 p-4">
          <div className="tyreInformation bg-white p-6">
            <h2 className="text-2xl font-semibold mb-5 text-gray-800">
              {tyre.name}
            </h2>
            <p className="text-sm text-gray-500 mb-6 italic">
              <strong>Category:</strong> {tyre.category}
            </p>
            <div className="infoWrapper space-y-4 text-gray-700 text-base">
              <p>
                <strong>Brand:</strong> {tyre.brand}
              </p>
              <p>
                <strong>Rim Diameter:</strong> {tyre.rimDiameter}
              </p>
              <p>
                <strong>Width:</strong> {tyre.width}
              </p>
              <p>
                <strong>Aspect Ratio:</strong> {tyre.aspectRatio}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="connectWithUs p-4">
            <h2 className="text-xl font-semibold mb-5 text-gray-800">
              Connect with us
            </h2>
            <div className="cta grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  target={option.target}
                  rel={option.rel}
                  className={`px-6 py-3 ${option.bg} text-white font-medium shadow-sm flex items-center justify-center gap-2 transition`}
                >
                  {option.icon}
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TyreFullPage;
