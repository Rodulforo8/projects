
const ProjectName = ({projectName}) => {
    return (
        <div style={projectNameStyle}>
           <h2 >{projectName}</h2>
        </div>
    )
}

const projectNameStyle = {
    textAlign: "center",
    margin:"auto",
    color:"gray"
}

export default ProjectName
