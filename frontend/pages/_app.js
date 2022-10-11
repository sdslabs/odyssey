import Navbar from "../components/Navbar";
import Card from "../components/Card";
import EventCard from "../components/EventCard";
import "../styles/globals.scss";
import {useState} from 'react';



function MyApp({ Component, pageProps }) {
  
  const [CardData, setCardData] = useState([
    {
      repoName: 'something',
      tag: 'someTagString',
      issueTitle: 'IssueTitle',
      mentor: 'Mentor',
      claim: false,
      assignee: 'somedude'
    },
    {
      repoName: 'something',
      tag: 'someTagString',
      issueTitle: 'IssueTitle',
      mentor: 'Mentor',
      claim: true,
      assignee: 'somedude'
    },
    {
      repoName: 'something',
      tag: 'someTagString',
      issueTitle: 'IssueTitle',
      mentor: 'Mentor',
      claim: false,
      assignee: 'somedude'
    }
  ])
  return (
    <>
      <Navbar />
      <Card CardData={CardData}/>
      <EventCard />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
