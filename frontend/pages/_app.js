import Navbar from "../components/Navbar";
import Card from "../components/Card";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import "../styles/globals.sscss";
import {useState} from 'react';


import { SessionProvider } from 'next-auth/react';

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
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Card CardData={CardData}/>
      <EventCard />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
