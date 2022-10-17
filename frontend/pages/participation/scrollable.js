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
        <ReposToContribute list={CardData}/>
    </div>
  );
}
