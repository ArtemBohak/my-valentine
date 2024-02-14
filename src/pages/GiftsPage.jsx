import { useState } from "react"

const GiftsPage = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div
        className={`
          w-full max-w-[600px] h-[400px] rounded 
          bg-slate-200 p-3 romantic text-pink-500 flex 
          flex-col items-center
        `}
      >
        <span className="text-2xl text-center">
          Here you can tell me about a thing I should give you, make for you or
          anything else, honey
        </span>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mt-10 w-full text-black text-[roboto]"
          style={{ fontFamily: "inter", fontWeight: "500" }}
        />
        <button
          className="h-8 border rounded bg-red-500 w-14 text-xl text-white mt-4 self-end"
          onClick={() => {}}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default GiftsPage
