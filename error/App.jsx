import { useState } from 'react'

import { InputBox } from './components/Index'
import Usecurrency from './hooks/Usecurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertamount, setConvertAMOUNT] = useState(0)
  const Currencyinfo = Usecurrency(from)
  const option = Object.keys(Currencyinfo)
  function swap() {
    setFrom(to)
    setTo(from)
    setAmount(convertamount)
    setConvertAMOUNT(amount)
  }

  const convet = () => {
    setConvertAMOUNT(amount * Currencyinfo[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('2563853.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convet()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                Currencyoptions={option}
                onCurrencychange={(currency)=>setTo(currency)}
                Selectcurrency={to}
                onAmountchange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertamount}
                Currencyoptions={option}
                onCurrencychange={(currency)=>setAmount(amount)}
                Selectcurrency={from}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()}to{to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
