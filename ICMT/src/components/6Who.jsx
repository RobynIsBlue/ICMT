import betty from "../assets/BETTY.png";

const Who = () => {
  return (
    <div>
      <h1>
        <i>WHODUNNIT?</i>
      </h1>
      <div>
        <h2>BETTY</h2>
        <p>Real cool bean</p>
        <img src={betty} style={{ maxWidth: "200px" }} />
      </div>
      <div>
        <h2>MORETTI</h2>
        <p>Seperate cool bean</p>
        <img src={betty} style={{ maxWidth: "200px" }} />
      </div>
      <div>
        <h2>LAURA</h2>
        <p>Not as cool as Betty, has killed less people :/</p>
        <img src={betty} style={{ maxWidth: "200px" }} />
      </div>
    </div>
  );
};

export default Who;
