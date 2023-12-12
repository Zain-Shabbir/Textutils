import React, { useState } from "react";

export default function TextForm(props) {
  const toUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const toLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const copyText = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const onChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };
  const [text, setText] = useState("Enter Text Here");
  return (
    <div>
      <h1 className="text-[24pt] text-center text mt-5">{props.heading}</h1>
      <div className="w-[60vw] mx-auto my-5 flex flex-col ">
        <label htmlFor="textBox" className="font-bold text-[16px]">
          Text Box
        </label>
        <textarea
          id="textBox"
          className="w-full p-2 border-2 border-black"
          onChange={onChange}
          value={text}
          rows="10"
        ></textarea>
        <div className="mt-5">
          <button
            className="bg-blue-600 p-2 rounded-lg text-white "
            onClick={toUppercase}
            id="upperCase"
          >
            Convert to Uppercase
          </button>
          <button
            className="bg-blue-600 p-2 mx-4 rounded-lg text-white "
            onClick={toLowercase}
            id="lowerCase"
          >
            Convert to Lowercase
          </button>
          <button
            className="bg-blue-600 p-2  rounded-lg text-white "
            onClick={copyText}
            id="copyText"
          >
            Copy Text
          </button>
          <button
            className="bg-blue-600 p-2 mx-4 rounded-lg text-white "
            onClick={removeExtraSpaces}
            id="removeExtraSpaces"
          >
            Remove Extra Spaces
          </button>
        </div>
        <div>
          <h2 className="text-[20pt]  my-5">your Text Summery</h2>
          <div>
            <p>
              {text.split(/\s+/).filter((word) => word !== "").length} words and{" "}
              {text.replace(/ /g, "").length} characters
            </p>
            <h3 className="text-[20pt] my-5">Preview</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
