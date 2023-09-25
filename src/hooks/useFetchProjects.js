import { useState, useEffect } from "react";
import client from "./../helpers/contentful";

const useFetchProjects = () => {
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "projects",
      })
      .then((data) => {
        const { items } = data;

        const projects = items.map((project) => ({
          ...project?.fields,
          id: project?.sys?.id,
          image: project?.fields?.image?.fields?.file?.url,
        }));

        setProjects(projects);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { projects, isLoading, error };
};

export default useFetchProjects;
