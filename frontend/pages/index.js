import UserProgress from "../components/UserProgress";

export default function Home() {
  return (
    <>    <div className="center">
      <h2>Home Page</h2>
    </div>
    <UserProgress progress={25} rank={3}/>
    </>
  );
}
