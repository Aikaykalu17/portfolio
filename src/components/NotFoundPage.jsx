import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <p className="font-display text-7xl font-extrabold md:text-8xl">404</p>
      <h1 className="text-2xl font-bold md:text-3xl">This page doesn&rsquo;t exist.</h1>
      <p className="max-w-sm text-muted">
        The link may be broken or the page may have moved.
      </p>
      <Link to="/" className="btn-primary mt-4 min-h-12 px-7">
        Back to home
      </Link>
    </section>
  );
}

export default NotFoundPage;
