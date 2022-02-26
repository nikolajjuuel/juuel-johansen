import './about.scss'
import profile from './profile.jpeg'

const About = () => {


  return (
    <div className='about'>
      <div className="about-form">
        <form>
          <div className="form-3">
            <div className="label-input w33">
              <label htmlFor="company" id='company' >Company</label>
              <input type="text" id="company" name="company" value="undefined" />
            </div>
            <div className="label-input w33">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" value="nikolajjuuel" />
            </div>
            <div className="label-input w33">
              <label htmlFor="email">Email address </label>
              <input type="text" id="email" name="email" value="nikolaj.juuel@gmail.com" />
            </div>
          </div>

          <div className="form-2">
            <div className="label-input w50">
              <label htmlFor="firstName" >First Name</label>
              <input type="text" id="firstName" name="firstName" value="Nikolaj" />
            </div>
            <div className="label-input w50">
              <label htmlFor="lastName" >Last Name</label>
              <input type="text" id="lastName" name="lastName" value="Johansen" />
            </div>
          </div>

          <div className="form-2">
            <div className="label-input w50">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" value="North Vancouver" />
            </div>
            <div className="label-input w50">
              <label htmlFor="country" >Country</label>
              <input type="text" id="country" name="country" value="Canada" />
            </div>
          </div>
          <div className="label-input">
            <label htmlFor='message'>About Me</label>
            <div className="about-me">
              <p>In the pursuit of crafting the perfect marketing campaigns, from target audience, copy, visual, and landing page. I taught myself the front-end development fundamentals on the side and started implementing my ideas on the job. After three years of building, designing, and maintaining e-commerce websites, I am ready to take the plunge into full-stack development.</p>
            </div>

          </div>
        </form>
      </div>
      <div className="avatar">
        <div className="avatar-info">
          <img src={profile} />
          <h2>Nikolaj Johansen</h2>
          <p>Full Stack-Developer</p>
          <p>JavaScript, React, Express, PostgreSQL</p>
        </div>
        <div className="avatar-quote"></div>
        <div className="avatar-socials">
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Instagram</li>

          </ul>
        </div>

      </div>
    </div>
  )
}

export default About;