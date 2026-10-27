import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="max-w-xl mx-auto px-4 py-24 text-center">
        <p className="text-6xl font-black text-brand">404</p>
        <h1 className="mt-4 text-3xl font-black text-ink">
          Hmm, we can't find that page.
        </h1>
        <p className="mt-3 text-lg text-ink-muted">
          It may have moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link to="/courses">See the courses</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/">Go home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
