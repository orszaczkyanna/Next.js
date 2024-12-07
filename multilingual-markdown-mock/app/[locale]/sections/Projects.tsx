import { useTranslations } from "next-intl";
import { projectsData } from "@/data/constants";
import Card from "../components/Card";

const Projects = () => {
  const t = useTranslations("Projects");

  // Combine static project data with dynamic translations
  // and display the 4 most recent projects in descending order
  const combinedProjects = projectsData
    .map((project, index) => {
      const projectTranslation = `list.project${index + 1}`;
      return {
        ...project,
        title: t(`${projectTranslation}.title`),
        description: t(`${projectTranslation}.description`),
      };
    })
    .reverse() // descending order
    .slice(0, 4); // display only the most recent four

  return (
    <section id="projects" className="section">
      <h1 className="section-title">{t("title")}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {combinedProjects.map(({ id, thumb, title, description }) => (
          <Card
            key={id}
            thumb={thumb}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
