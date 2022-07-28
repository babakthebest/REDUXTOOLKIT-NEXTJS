import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  decrement,
  increment,
  incrementByAmount,
} from "../redux/Slices/counterSlise";
import { getAdsAsync } from "../redux/Slices/getAdsSlice";

const Counter = () => {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter.value);
  const ads = useSelector((store) => store.getAds.ads);

  console.log(ads);
  return (
    <div>
      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
      <input
        className="form-control w-25"
        type="number"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch(incrementByAmount(Number(input)))}
      >
        increment by amount
      </button>
      <button className="btn btn-primary m-3" onClick={() => dispatch(clear())}>
        clear
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={(req) => dispatch(getAdsAsync(req, 2))}
      >
        getads
      </button>

      {count}
      <div>{JSON.stringify(ads, null, 2)}</div>
    </div>
  );
};

export default Counter;
