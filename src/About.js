import './about.scss'
import profile from './profile.jpeg'

const About = () => {


  return (
    <div className='about'>
      <div className="about-form">
        <form>
          <div className="form-3">
            <div className="label-input">
              <label htmlFor="company" id='company' >Company</label>
              <input type="text" id="company" name="company" value="undefined" />
            </div>
            <div className="label-input">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" value="nikolajjuuel" />
            </div>
            <div className="label-input">
              <label htmlFor="email">Email address </label>
              <input type="text" id="email" name="email" value="nikolaj.juuel@gmail.com" />
            </div>
          </div>

          <div className="form-2">
            <div className="label-input">
              <label htmlFor="firstName" >First Name</label>
              <input type="text" id="firstName" name="firstName" value="Nikolaj" />
            </div>
            <div className="label-input">
              <label htmlFor="lastName" >Last Name</label>
              <input type="text" id="lastName" name="lastName" value="Johansen" />
            </div>
          </div>

          <div className="form-2">
            <div className="label-input">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" value="North Vancouver" />
            </div>
            <div className="label-input">
              <label htmlFor="country" >Country</label>
              <input type="text" id="country" name="country" value="Canada" />
            </div>
          </div>
          <div className="label-input">
            <label htmlFor='message'>About Me</label>
            <textarea id="message" name="message" rows="4" cols="50" value="In the pursuit of crafting the perfect marketing campaigns, from target audience, copy, visual, and landing page. I taught myself the front-end development fundamentals on the side and started implementing my ideas on the job. After three years of building, designing, and maintaining e-commerce websites, I am ready to take the plunge into full-stack development." />
          </div>
        </form>
      </div>
      <div className="avatar">
        <div className="avatar-info">
          <img src={profile} />
          <h1>Nikolaj</h1>
          <h2>Full Stack-Developer</h2>
          <h3>JavaScript, React, Express, PostgreSQL</h3>
        </div>
        <div className="avatar-quote"></div>
        <div className="avatar-socials">
          <ul>
            <li>Github</li>
            <li>Insta</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default About;