const Contact = () => {

  return (
    <form>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />
      Message:
      <textarea id="message" name="message" rows="4" cols="50" />



    </form>
  )
}

export default Contact;