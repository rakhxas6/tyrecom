import React from "react";
import { photos } from "../constants/Product";
import Masonry from "react-masonry-css";
import Breadcrumb from "./BreadCrumb";

const GallerySection = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  // Get current column count based on screen width
  const getColumnCount = () => {
    const width = window.innerWidth;
    if (width <= 500) return 1;
    if (width <= 700) return 2;
    if (width <= 1100) return 3;
    return 4;
  };

  // Calculate height based on actual column width
  const getImageHeight = (photo) => {
    const totalGutter = 12 * (getColumnCount() - 1); // gutter space
    const columnWidth =
      (window.innerWidth - totalGutter - 40) / getColumnCount(); // minus padding (40px approx)

    if (photo.width && photo.height) {
      return Math.floor((columnWidth * photo.height) / photo.width);
    }

    // Fallback if dimensions are missing
    const heights = [250, 300, 180, 400, 220, 350, 280, 320, 200, 450];
    return heights[photo.id % heights.length];
  };

  return (
    <section className="p-5 sm:p-8 mx-auto space-y-6 px-6 py-8 md:px-16 md:py-12">
      <Breadcrumb />

      <div className="headingContainer flex flex-col gap-5">
        <h2 className="font-thin text-3xl  relative">
          Glimpses into our Company{" "}
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-orange-500 rounded"></span>
        </h2>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="mb-4 group relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div
              className="relative overflow-hidden"
              style={{ height: `${getImageHeight(photo)}px` }}
            >
              <img
                src={photo.src}
                srcSet={photo.srcSet ? photo.srcSet.join(", ") : undefined}
                sizes={photo.sizes}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </Masonry>

      <style jsx>{`
        .my-masonry-grid {
          display: flex;
          // margin-left: -16px;
          width: auto;
        }

        .my-masonry-grid_column {
          padding-left: 1px;
          background-clip: padding-box;
        }

        .my-masonry-grid_column > div {
          margin-bottom: 1px;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
