import PropTypes from 'prop-types'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const UserProgress = ({ progress, rank}) =>{
    return(
        <div class="progresspanel">
            <div class="progress">
            PROGRESS
            </div>
            <div class="progressbar">
            <CircularProgressbar
             value={progress}  
             text={`${progress}%`}
             styles={buildStyles({
                pathColor: '#E94560',
                textColor: '#fff',
                trailColor: '#74303C',
            })}/>
            </div>
            <div class="rank">
            {rank} RANK
            </div>
    </div>
    )
}

UserProgress.defaultProp={
    progress:0,
    rank: 0
}

UserProgress.defaultProp={
    progress: PropTypes.integer,
    rank: PropTypes.integer
}
export default UserProgress