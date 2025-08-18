import React, { useState, useEffect } from "react";
import { photos as originalPhotos } from "../constants/Product";
import Masonry from "react-masonry-css";
import Breadcrumb from "./BreadCrumb";

const GallerySection = () => {
  const [photos, setPhotos] = useState([]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const getColumnCount = () => {
    const width = window.innerWidth;
    if (width <= 500) return 1;
    if (width <= 700) return 2;
    if (width <= 1100) return 3;
    return 4;
  };

  const getImageHeight = (photo) => {
    const totalGutter = 12 * (getColumnCount() - 1);
    const columnWidth =
      (window.innerWidth - totalGutter - 40) / getColumnCount();

    if (photo.width && photo.height) {
      return Math.floor((columnWidth * photo.height) / photo.width);
    }
    const heights = [250, 300, 180, 400, 220, 350, 280, 320, 200, 450];
    return heights[photo.id % heights.length];
  };

  // Shuffle photos once on mount
  useEffect(() => {
    const shuffled = [...originalPhotos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setPhotos(shuffled);
  }, []);

  return (
    <section className="mx-auto space-y-6 px-6 pt-32 pb-12 md:px-16">
      <Breadcrumb />

      <div className="headingContainer flex flex-col gap-5">
        <h2 className="font-thin text-3xl font-clash text-gray-800 relative">
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
