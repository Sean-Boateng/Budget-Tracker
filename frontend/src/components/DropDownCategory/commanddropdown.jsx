import Dropdown from "./Dropdown"

export default function Commanddropdown() {

  const options = [
    {value:"green", label:"Green"},
    {value:"red", label:"Red"},
    {value:"blue", label:"Blue"},
    {value:"yellow", label:"Yellow"},
  ];
    return (
      <div className="App">
        <Dropdown placeHolder="Select..."options = {options} />
      </div>
    );
  }