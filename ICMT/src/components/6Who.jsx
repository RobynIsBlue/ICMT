import betty from "../assets/BETTY.png";

const Who = () => {
  return (
    <div>
      <h1>
        <i>WHODUNNIT?</i>
      </h1>
      <div>
        <h2>BETTY</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          eveniet doloribus magni temporibus cum iure ad debitis voluptatem
          atque maxime?
        </p>
        <p>Button for contacting!</p>
        <img src={betty} style={{ maxWidth: "200px" }} />
      </div>
      <div>
        <h2>MORETTI</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          suscipit ex dolore illo placeat mollitia unde eius veniam repellendus
          blanditiis.
        </p>
        <img src={betty} style={{ maxWidth: "200px" }} />
      </div>
      <div>
        <h2>LAURA</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          repellendus mollitia facere exercitationem neque dolor maiores aliquam
          atque. Expedita, obcaecati.
        </p>
        <p>Button for contacting!</p>
        <img src={betty} style={{ maxWidth: "200px" }} />
      </div>
    </div>
  );
};

export default Who;
