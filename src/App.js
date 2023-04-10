import './App.css';
import { useState } from "react";
function App() {
  var [count, set] = useState(0)
  function decrement() {
    set(count - 1)
  }
  function increment() {
    set(count + 1)
  }
  function reset() {
    set(0)
  }
  return (
    <div className="">
      <div className='flex items-center justify-center h-screen bg-[#aadaf0] flex-col text-[#323433] gap-5'>
        {
          count === 10 ? <>
            <div className=''> As you have counted <b>10</b>, we assume you are extraordinarily fascinated with our work, which we quite understand.. so, check out our new AI-powered tool <a href='https://ai.webxspark.com/reword-me' className='text-blue-900 underline' target='_blank'>RewordMe</a></div>
          </> : <>
            <div className='font-bold text-4xl'>COUNTER APP</div>
            <div className='text-7xl font-bold '>{count}</div>
            <div className='flex flex-row gap-4 '>
              <button onClick={decrement} className='bg-[#2e7d32] rounded-lg text-white px-5 py-2'>Decrement</button>
              <button onClick={reset} className='bg-[#d32f2f] rounded-lg text-white px-5 py-2'>Reset</button>
              <button onClick={increment} className='bg-[#1976d2] rounded-lg text-white px-5 py-2'>Increment</button>
            </div>
          </>
        }

      </div>

    </div>
  );
}

export default App;
