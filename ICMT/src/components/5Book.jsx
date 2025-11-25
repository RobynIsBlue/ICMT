import betty from "../assets/BETTY.png";

const Book = () => {
  return (
    <div>
      <h1>
        <i>DO YOU HAVE A VENUE?</i>
      </h1>
      <p>We'll sleep in your house, we don't care!!</p>
      <img src={betty} style={{ maxWidth: "200px" }} />
    </div>
  );
};

export default Book;
