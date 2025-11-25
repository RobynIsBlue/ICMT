import betty from "../assets/BETTY.png";

const ComeSee = () => {
  return (
    <div>
      <h1>
        <i>COME SEE US</i>
      </h1>
      <p>
        I will be a collapsed table where you can uncollapse me and see posters
        for the events. I will initially show the location, time, and show name.
      </p>
      <img src={betty} style={{ maxWidth: "200px" }} />
    </div>
  );
};

export default ComeSee;
