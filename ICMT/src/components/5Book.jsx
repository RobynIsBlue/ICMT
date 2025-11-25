import betty from "../assets/BETTY.png";

const Book = () => {
  return (
    <div>
      <h1>
        <i>DO YOU HAVE A VENUE?</i>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque porro rem
        ipsa accusantium illum impedit itaque officia voluptatum! Recusandae
        repudiandae fugit ad quas ullam nobis vel hic corporis! Quas dicta ea
        optio excepturi nesciunt sit totam expedita facere deserunt eum.
      </p>
      <img src={betty} style={{ maxWidth: "200px" }} />
    </div>
  );
};

export default Book;
