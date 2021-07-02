const Input = ({ location, handleChange, handleSubmit }) => {

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={location}
        name='location'
        className="search-box"
        placeholder="Insert City Here"
        onChange={handleChange}
      />
      <button className="btn" type="submit">Get Weather</button>
    </form>
  )
}

export default Input
