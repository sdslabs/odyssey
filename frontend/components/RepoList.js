import Repo from "./RepoComponent";

const ReposToContribute = ({ list }) => {
  return (
    <div className="repodialogue">
      <div className="scroll">
        {list.map((Card, i) => {
          return <Repo Card={Card} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ReposToContribute;
