import './about.scss'


const About = () => {


  return (
    <>
      <div className="about-form">
        <form>
          <div className="form-3">
            <div className="label-input">
              <label htmlFor="company" id='company'>Company</label>
              <input type="text" id="company" name="company" />
            </div>
            <div className="label-input">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" value="nikolajjuuel" />
            </div>
            <div className="label-input">
              <label htmlFor="email">Email address </label>
              <input type="text" id="email" name="email" />
            </div>
          </div>

          <div className="form-2">
            <div className="label-input">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="label-input">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
          </div>

          <div className="form-2">
            <div className="label-input">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" />
            </div>
            <div className="label-input">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" />
            </div>
          </div>
          <div className="label-input">
            <label htmlFor='message'>About Me</label>
            <textarea id="message" name="message" rows="4" cols="50" />
          </div>
        </form>
      </div>
      <div className="avatar">
        <div className="avatar-info">
          <img src="" />
          <h1>Nikolaj</h1>
          <h2>Full Stack-Developer</h2>
        </div>
        <div className="avatar-quote"></div>
        <div className="avatar-socials">
          <ul>
            <li>Github</li>
            <li>Insta</li>
          </ul>
        </div>


      </div>
    </>
  )
}

export default About;