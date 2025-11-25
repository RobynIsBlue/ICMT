import betty from "../assets/BETTY.png";

const Testimonials = () => {
  return (
    <div>
      <h1>
        <i>DON'T JUST TAKE IT FROM US</i>
      </h1>
      <p>The people, they all love us</p>
      <img src={betty} style={{ maxWidth: "200px" }} />
      <p>They love us so much</p>
      <img src={betty} style={{ maxWidth: "200px" }} />
    </div>
  );
};

export default Testimonials;
