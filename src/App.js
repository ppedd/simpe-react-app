import { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";

function App() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const totalAmount = data.reduce((acc, curr) => acc + curr.count, 0);
    console.log(totalAmount);
    setCounter(totalAmount);
  }, [data]);

  const onIncreaseHandler = (id) => {
    const item = data.filter((item) => item.id === id);
    const itemIndexOf = data.indexOf(...item);
    const newData = data.map((d, i) => {
      if (i === itemIndexOf) {
        d.count = d.count + 1;
        return d;
      }
      return d;
    });
    setData(newData);
  };
  const onDecreaseHandler = (id) => {
    const item = data.filter((item) => item.id === id);
    const itemIndexOf = data.indexOf(...item);
    const newData = data.map((d, i) => {
      if (i === itemIndexOf) {
        d.count = d.count - 1;
        return d;
      }
      return d;
    });
    setData(newData);
  };
  const onRemoveHandler = (id) => {
    const item = data.filter((item) => item.id === id);
    const itemIndexOf = data.indexOf(...item);
    const newData = data.filter((d, i) => i !== itemIndexOf);
    setData(newData);
  };
  const onResetHandler = () => {
    const resetData = data.map((data) => {
      data.count = 0;
      return data;
    });

    setData(resetData);
  };
  const onAddHandler = () => {
    const newData = data.concat([{ id: "m1" + Math.random(), count: 0 }]);
    setData(newData);
  };
  return (
    <div className="flex flex-col h-screen">
      <Header counter={counter} />
      <Home
        lists={data}
        onIncrease={onIncreaseHandler}
        onDecrease={onDecreaseHandler}
        onRemove={onRemoveHandler}
        onReset={onResetHandler}
        onAdd={onAddHandler}
      />
    </div>
  );
}

export default App;
