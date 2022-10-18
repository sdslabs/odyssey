import HomePage from "../components/HomePage";
import Timeline from "../components/Timeline";
import Announcement from "../components/Announcements";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [announcement, setAnnouncement] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/get-announcements/").then((res) => {
      setAnnouncement(res.data);
    });
  }, []);
  return (
    <div>
      <HomePage />
      <Timeline />
      <Announcement data={announcement} />
    </div>
  );
}
