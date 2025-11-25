import betty from "../assets/BETTY.png";

const Testimonials = () => {
  return (
    <div>
      <h1>
        <i>DON'T JUST TAKE IT FROM US</i>
      </h1>
      <p>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        laboriosam perspiciatis quidem quam rem amet dolor, ab error voluptates,
        ea quaerat veniam nobis! Inventore, nam!"
      </p>
      <p>- person</p>
      <img src={betty} style={{ maxWidth: "200px" }} />
      <p>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a
        harum fugit facilis nemo repellat accusamus animi. Voluptates facilis,
        quisquam deleniti nobis harum culpa distinctio!"
      </p>
      <p>- person</p>
      <img src={betty} style={{ maxWidth: "200px" }} />
    </div>
  );
};

export default Testimonials;
