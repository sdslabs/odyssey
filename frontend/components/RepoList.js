import Repo from "./RepoComponent";
import AboutCard from "./AboutCard";

const ReposToContribute = ({ list, callback }) => {
  return (
    <div className="repodialogue">
      <div className="scroll">
        {list.map((Card, i) => {
          return <Repo Card={Card} key={i} callback={callback} />;
        })}
        <AboutCard />
      </div>
    </div>
  );
};

export default ReposToContribute;
