const SideMenu = (props) => {


  return (
    <div className="side-menu" style={props.style}>
      <div className="">

        <h2> Nikolaj Johansen </h2>

      </div>
      <div className="links">
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="Contact">
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="Socials">
        <h2> Socials </h2>
        <ul>
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  )
}





export default SideMenu;