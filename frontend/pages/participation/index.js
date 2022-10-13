import ReposToContribute from "../../components/RepoList";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Octokit, App } from "octokit";
const axios = require("axios").default;

export default function Home() {
  const [CardData, setCardData] = useState([]);
  const { data: session } = useSession();
  const fetchRepos = async () => {
    const octokit = new Octokit({
      auth: session.accessToken,
    });
    const { data } = await axios.get(
      `http://localhost:8000/api/get-all-issues/`
    );
    let repos = [];
    data.forEach(async (element) => {
      var repoInfo = element.issue.split("/");
      let info = await octokit.request(
        "GET /repos/{owner}/{repo}/issues/{issue_number}",
        {
          owner: repoInfo[3],
          repo: repoInfo[4],
          issue_number: repoInfo[6],
        }
      );
      repos.push({
        repoName: repoInfo[3],
        tag: repoInfo[4],
        issueTitle: info.data.title,
        mentor: element.mentorId,
        claim: element.assignee ? true : false,
        assignee: element.assignee,
        issueUrl: element.issue,
      });
      setCardData(repos);
    });
  };
  useEffect(() => {
    if (session) fetchRepos();
  }, [session]);
  return (
    <div>
      <ReposToContribute list={CardData} />
    </div>
  );
}
