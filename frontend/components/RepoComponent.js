import { useSession } from "next-auth/react";
const axios = require("axios").default;

const Repo = ({ Card }) => {
  const { data: session } = useSession();
  return (
    <div className="repobox">
      <div className="description">
        <h4>
          <b>
            {Card.repoName} - {Card.tag}
          </b>
        </h4>
        <a href={Card.issueUrl} target="_blank">
          {Card.issueTitle}
        </a>
      </div>
      <div className="mentor">
        Mentored by - {Card.mentor}
        {Card.claim == false ? (
          <button
            className="button"
            style={{
              marginLeft: "auto",
              marginTop: "15px",
            }}
            onClick={() => claimIssue(Card, session)}
          >
            Claim
          </button>
        ) : (
          <p>Assigned to - {Card.assignee}</p>
        )}
      </div>
    </div>
  );
};

async function claimIssue(Card, session) {
  const response = await axios.post(
    'http://localhost:8000/api/claim-issue/',
    {
      access_token: session.accessToken,
      id_token: session.user.id,
      issue: Card.issueUrl,
    }
  )
}

export default Repo
