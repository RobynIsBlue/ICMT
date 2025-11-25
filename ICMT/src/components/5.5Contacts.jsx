import betty from "../assets/BETTY.png";

const Contacts = () => {
  return (
    <div>
      <div>
        <h1>
          <i>PHONE</i>
        </h1>
        <img src={betty} style={{ maxWidth: "200px" }} />
      </div>
      <div>
        <h1>
          <i>EMAIL</i>
        </h1>
        <img src={betty} style={{ maxWidth: "200px" }} />
      </div>
      <div>
        <h1>
          <i>OTHER</i>
        </h1>
        <img src={betty} style={{ maxWidth: "200px" }} />
      </div>
    </div>
  );
};

export default Contacts;
