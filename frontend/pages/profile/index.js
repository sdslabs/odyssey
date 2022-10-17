import Profile from "../../components/Profile";
import UserProgress from "../../components/UserProgress";
import ReposToContribute from '../../components/RepoList';
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
      <Profile />
      <UserProgress progress={25} rank={3} />
      <div className="about">
        <p style={{padding:3+"rem"}}>Your Projects</p>
      </div>
      <ReposToContribute list={CardData}/>
    </div>
  );
}
