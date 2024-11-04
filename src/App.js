import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice(you need it)</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <>
      <h1>
        {" "}
        click every 5 second, 100 million people use this website so its laggy
        😁{" "}
      </h1>
      <p>
        You have read <strong>{props.count}</strong>
        pieces of advice
      </p>
    </>
  );
}
