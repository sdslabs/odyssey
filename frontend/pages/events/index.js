import Card from "../../components/Card";
import EventCard from "../../components/EventCard";
import {useState} from 'react';

function Events({ Component, pageProps }) { 
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
    <div>
      <Card CardData={CardData}/>
      <EventCard />
    </div>
  );
}

export default Events;
