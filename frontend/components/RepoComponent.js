import PropTypes from 'prop-types'

const Repo=( {Card} )=>{
    return (
        <div class="repobox">
            <div class="description">
            <h4><b>{Card.repoName} - {Card.tag}</b></h4>
              <p>{Card.issueTitle}</p>
            </div>
            <div class="mentor">
                Mentored by - {Card.mentor}
                {Card.claim == false ? <button>Read More</button> : <p>Assigned to - {Card.assignee}</p>}
            </div>
        </div>
    )
}

/* Repo.defaultProp={
    description:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum ",
    mentor: "VANSH UPPAl"
}

Repo.defaultProp={
    description: PropTypes.string,
    mentor: PropTypes.string
} */
export default Repo