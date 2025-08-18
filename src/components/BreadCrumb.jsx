import { Link, useLocation } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

const Breadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Break path into segments: /products/battery/123
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-400 uppercase ">
        {/* Home link */}
        <li>
          <Link to="/" className="transition-colors hover:text-gray-900">
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          // Build path up to current segment
          const routeTo = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          // Format segment text: 'my-product' -> 'My Product'
          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <li key={index} className="flex items-center gap-1">
              {/* Separator icon */}
              <LuArrowRight size={10} />

              {isLast ? (
                <span className="">
                  {label}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="transition-colors duration-100 hover:text-gray-900 "
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
