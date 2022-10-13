import PropTypes from 'prop-types'

const Repo=( {description, mentor} )=>{
    return (
        <div class="repobox">
            <div class="description">
                {description}
            </div>
            <div class="mentor">
                MENTOR: {mentor}
            </div>
        </div>
    )
}

Repo.defaultProp={
    description:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum ",
    mentor: "VANSH UPPAl"
}

Repo.defaultProp={
    description: PropTypes.string,
    mentor: PropTypes.string
}
export default Repo