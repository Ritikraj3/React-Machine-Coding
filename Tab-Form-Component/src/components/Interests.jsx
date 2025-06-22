const Interests = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={(e) => handleDataChange(e, "name")}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="movies"
            checked={interests.includes("movies")}
            onChange={(e) => handleDataChange(e, "name")}
          />
          Movies
        </label>
        <label>
          <input
            type="checkbox"
            name="musics"
            checked={interests.includes("musics")}
            onChange={(e) => handleDataChange(e, "name")}
          />
          Music
        </label>
      </div>
      {errors.interests && <span className="error"> {errors.interests} </span>}
    </div>
  );
};

export default Interests
