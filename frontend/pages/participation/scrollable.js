import ReposToContribute from '../../components/RepoList';
import ParticipationDetails from '../../components/ParticipationDetails';
import PullMerge from '../../components/PullMerge';
import CodeOfConduct from '../../components/CodeOfConduct';
import Resources from '../../components/Resources';
import Values from '../../components/Values';
import Searchbar from '../../components/Searchbar';
import {useState} from 'react';

export default function Home() {
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
  ]);
  return (
    <div>
        <div className='about'>
          <div className='searchandissues'>
            <p>Pick your issues</p>
            <Searchbar />
          </div>
        </div>
        <ReposToContribute list={CardData}/>
        <div className='participationB'>
          <ParticipationDetails />
          <PullMerge />
          <CodeOfConduct />
          <Resources />
          <Values />
        </div>
    </div>
  );
}
