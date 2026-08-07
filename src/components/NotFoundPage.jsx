import { FaTriangleExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-4">
      <FaTriangleExclamation
        size={50}
        title="Triangle Exclamation"
        aria-label="Caution"
        role="img"
        color="ff0000"
      />
      <h1 className="text-4xl font-bold">404</h1>

      <p className="text-slate-600">This page doesn't exist.</p>
      <Link to="/" className="text-sm underline">
        Go back home
      </Link>
    </div>
  );
}

export default NotFoundPage;
