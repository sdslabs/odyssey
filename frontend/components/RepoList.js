import Repo from './RepoComponent'

const ReposToContribute=({list})=>{
    return (
            <div class="repodialogue">
                <div class="scroll">
            {list.map((Card) => {
                return (
                    <Repo Card={Card} />
                );
            })}
            </div>
        </div>
    )
}

export default ReposToContribute