const Projects = (props) => {
  const { name, tools, description } = props;

  console.log(name)

  return (
    <div>
      <h2>{name}</h2>
      <h3>{tools}</h3>
      <h4>{description}</h4>
    </div>
  )
}

export default Projects;