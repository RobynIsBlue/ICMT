import { useState } from "react";
// import './App.css'
import WhatIsMT from "./components/1WhatIsMT";
import WhatIsIC from "./components/2WhatIsIC";
import ComeSee from "./components/3ComeSee";
import Testimonials from "./components/4Testimonials";
import Book from "./components/5Book";
import Contacts from "./components/5.5Contacts";
import Who from "./components/6Who";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <WhatIsMT />
      <WhatIsIC />
      <ComeSee />
      <Testimonials />
      <Book />
      <Contacts />
      <Who />
    </div>
  );
}

export default App;
