import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [checknNum, setNum] = useState(false);
  const [checkChar, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (checknNum) {
      str += "0123456789";
    }
    if (checkChar) {
      str += "!@#$%^&*()_+{}[]><?";
    }

    for (let i = 1; i <= length; i++) {
      let passwordd = Math.floor(Math.random() * str.length);

      pass += str.substring(passwordd, passwordd + 1);

      // console.log("Math.random() =", Math.random(), ",*str.lenght= ", str.length, ", gave passwordd = ", passwordd, " , password + 1 = ", passwordd + 1, " pass = ", pass);

      // console.log(passwordd);
      // console.log(password+1);
      // console.log(pass);
    }
    setPassword(pass);
  }, [checknNum, checkChar, length, setPassword]);

  //Copying the value of password from the text
  const CopyValue = () => {
    document.getElementById("lrt").style.display = "block";

    setTimeout(() => {
      document.getElementById("lrt").style.display = "none";
    }, 700);
    navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [setPassword, length, checkChar, checknNum]);

  const changed = (ele) => {
    setLength(ele.target.value);
  };

  return (
    <>
      {/* <h1>{dayName}</h1> */}
      <p
        id="lrt"
        className="text-center mt-12 phones:mt-24 "
        style={{ display: "none" }}
      >
        Password has been Copied !{" "}
      </p>
      <h1 className=" text-red-500 font-extrabold fixed inset-0 flex  justify-center gap-2  top-48 lg:text-4xl md:text-2xl phones:text-xl phones:mt-3.5 ">
        Your <span className="text-blue-400 font-sans">Own </span>Password{" "}
        <span className="text-blue-400 font-sans"> Generator</span>
      </h1>

      <div className="fixed rounded-xl inset-x-8  flex bg-blue-500  flex-col top-60 shadow-lg drop-shadow-2xl ">
        {/* <div className=" flex max-w-md py-2 justify-center "> */}
        <div className="flex h-10 mt-10 my-3 px-2 gap-0  justify-center ">
          <input
            type="text"
            name=""
            id=""
            className=" rounded-l-lg rounded-r-none pl-2 outline-none border-2 pr-2 w-80 font-bold"
            placeholder="Get Your Password here"
            readOnly
            value={password}
            onChange={() => {
              setPassword((prev) => prev != prev);
            }}
          />
          <button
            className="bg-red-500 rounded-r-lg px-4 py-2"
            onClick={CopyValue}
          >
            {" "}
            Copy
          </button>
        </div>

        <div className="  flex flex-wrap justify-center gap-2 items-center w-full ">
          <input
            type="range"
            className=" "
            name=""
            id=""
            value={length}
            min={8}
            max={15}
            onChange={changed}
          />
          length:{length}
        </div>

        <div className="flex gap-1 justify-center pt-4 items-center   pb-5">
          <input
            type="checkbox"
            className=" "
            name=""
            id=""
            onChange={() => {
              setNum((prev) => !prev);
            }}
            defaultChecked={checknNum}
          />
          Numbers
          <input
            type="checkbox"
            name=""
            id=""
            defaultChecked={checkChar}
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          Characters
        </div>

        <p className="bg-red-500 px-3 py-2 hover:bg-red-600 rounded-bl-lg rounded-br-lg font-sans font-semibold text-white justify-center flex ">
          Copyright &copy; Aman{" "}
        </p>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
