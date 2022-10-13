import MemberCards from '../../components/MemberCard'
export default function Home() {
  return (
    <div className="center">
      <MemberCards imgsource={'/ok.jpg'} name="urmom"/>
      <h2>Home Page</h2>
    </div>
  );
}
