import { useState } from "react"

const ValentinePage = () => {
  const [widthA, setWidthA] = useState(1)
  const [step, setStep] = useState("question")

  const submitMessage = () => {
    console.log("agreed")
    setStep("answer")
  }

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div
        className={`
          w-full max-w-[600px] h-[400px] rounded 
          bg-slate-200 p-3 romantic text-pink-500 flex 
          flex-col items-center
          ${step === 'question' ? 'justify-between' : 'justify-center'}
        `}
      >
        {step === 'question' && <span className="text-2xl">Will you be my valentine?</span>}
        {step === "question" ? (
          <div className="flex flex-col justify-center items-center gap-4 pb-10 select-none">
            <img src={"/cat.gif"} className="h-40" />
            <div className="flex gap-3">
              <button
                className="h-8 border rounded bg-red-500 w-14 text-xl text-white"
                onClick={submitMessage}
              >
                YES
              </button>
              <button
                className="h-8 border rounded w-14 text-xl text-center"
                style={{
                  width: 56 * widthA,
                  height: 36 * widthA,
                  fontSize: 20 * widthA,
                }}
                onClick={() => setWidthA((p) => p * 0.7)}
              >
                NO
              </button>
            </div>
          </div>
        ) : (
          <div
            className="text-4xl"
          >
            URAAAAAA, my honey
          </div>
        )}
      </div>
    </div>
  )
}

export default ValentinePage
