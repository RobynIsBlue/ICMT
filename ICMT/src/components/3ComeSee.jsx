import betty from "../assets/BETTY.png";

const ComeSee = () => {
  return (
    <div>
      <h1>
        <i>COME SEE US</i>
      </h1>
      <p>We're fuckin awesome dude</p>
      <img src={betty} style={{ maxWidth: "200px" }} />
    </div>
  );
};

export default ComeSee;
