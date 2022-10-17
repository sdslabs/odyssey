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

export default Repo