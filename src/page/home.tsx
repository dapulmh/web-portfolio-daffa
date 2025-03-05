import ProfileComponent from "../components/ProfileComponent";
import SkillsComponent from "../components/SkillsComponent";
import ProjectComponent from "../components/ProjectComponent";

const HomePage: React.FC = () => {
  return (
    <div>
      <ProfileComponent />
      <SkillsComponent />
      <ProjectComponent />
    </div>
  );
};

export default HomePage;
