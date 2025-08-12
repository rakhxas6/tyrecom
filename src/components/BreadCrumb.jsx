import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Break path into segments: /products/battery/123
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-orange-400 ">
        {/* Home link */}
        <li>
          <Link
            to="/"
            className="transition-colors hover:text-gray-900"
          >
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
            <li key={index} className="flex items-center">
              {/* Separator icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 mx-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 
                     7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 
                     1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              {isLast ? (
                <span className=" text-orange-400 hover:text-gray-900">
                  {label}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="transition-colors hover:text-gray-900 "
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
