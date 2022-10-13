import Repo from './RepoComponent'


const ReposToContribute=({list})=>{
    return (
            <div class="repodialogue">
                <div class="scroll">
            {list.map((repo) => {
                return (
                    <Repo key={repo.id} description={repo.description} mentor={repo.mentor} />
                );
            })}
            </div>
        </div>
    )
}

export default ReposToContribute