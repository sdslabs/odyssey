import HomePage from "../components/HomePage";
import Timeline from "../components/Timeline";
import Announcement from "../components/Announcements"
const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24] 

export default function Home() {
  return (
    <div>
      <HomePage />
      <Timeline />
      <Announcement data={data}/>
    </div>
  );
}
