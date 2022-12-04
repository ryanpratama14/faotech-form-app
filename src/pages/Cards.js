import { useState } from "react";
import Card from "./components/Card";
import InputField from "./components/InputField";

function Cards() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [data, setData] = useState([{ name: "Ryan", age: 22 }]);

  return (
    <div className="App font-mono text-center min-h-screen App-header text-black dark:text-white">
      {data?.map((element) => {
        return (
          <div className="mt-4 ">
            <Card nameProps={element.name} ageProps={element.age} />
          </div>
        );
      })}
      <div className=" mt-4">
        <InputField
          valueTyped={(e) => {
            setName(e);
          }}
          type="text"
          lengthMax={20}
          placeholderValue="Your Name"
        />
      </div>
      <div className=" mt-4">
        <InputField
          valueTyped={(e) => {
            setAge(e);
          }}
          lengthMax={2}
          placeholderValue="18+"
        />
      </div>
      <button
        onClick={() => {
          if (age >= 18 && name.length > 0) {
            setData([...data, { name, age }]);
          }
        }}
        className="btn btn-primary mt-4 mb-4 w-72"
      >
        Add new card
      </button>
    </div>
  );
}

export default Cards;
