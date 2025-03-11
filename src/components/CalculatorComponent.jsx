import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import dollar from '../assets/icon-dollar.svg';
import person from '../assets/icon-person.svg';

const CalculatorComponent = () => {

    const [bill, setBill] = useState(0);
    const [people, setPeople] = useState(0);
    const [tip, setTip] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);
    const [tipPer, setTipPer] = useState(0);
    const [totalPer, setTotalPer] = useState(0);

    useEffect(() => {
        if (bill > 0 && people > 0 && tip > 0) {
            setTipPer((bill * tip) / people);
            setTotalPer((bill + bill * tip) / people);
        }
    }, [tip, bill, people]);

    const handleReset = () => {
        setBill(0);
        setPeople(0);
        setTip(0);
        setSelectedButton(null);
        setTipPer(0);
        setTotalPer(0);
    };


  return (
    <div className='my-36'>
            <img src={logo} alt='Splitter Logo' className='mx-auto' />
            <div className='bg-white w-screen md:w-7/12 h-1/3 shadow-sm shadow-grayishCyan rounded-2xl md:mx-auto mt-20 md:flex px-5 py-4 md:p-2 max-md:text-sm'>
                <div className='w-full md:w-1/2'>
                    <div className='md:pl-10 md:pr-3 py-6'>
                        <p className='text-cyan-800'>Bill</p>
                        <div className='relative'>
                            <span className='absolute text-gray-400 text-2xl font-normal top-[14px] left-4'>
                                <img src={dollar} alt='Dollar Sign' />
                            </span>
                            <input value={bill === 0 ? '' : bill} type='number' placeholder='0' className='bg-cyan-50 h-12 rounded-xl text-xl text-right pr-5 w-full' onChange={(e) => setBill(parseFloat(e.target.value))} min={0} onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()} />
                        </div>
                    </div>

                    <div className='md:pl-10 py-6'>
                        <p>Select Tip %</p>
                        <div className='grid grid-cols-2 md:grid-cols-3 w-full md:w-96 gap-y-3 max-md:gap-x-4'>
                            {[5, 10, 15, 25, 50].map((percentage, index) => (
                                <button key={index} className={`${selectedButton === index ? 'bg-cyan-600 text-cyan-800' : 'bg-cyan-600 text-white'} text-2xl w-full md:w-28 h-12 rounded-lg font-semibold hover:bg-cyan-300 hover:text-cyan-700`} onClick={() => {
                                    setSelectedButton(index);
                                    setTip(percentage / 100);
                                }}>
                                    {percentage}%
                                </button>
                            ))}
                            <input className='text-2xl bg-cyan-50 w-11/12 md:w-28 h-12 rounded-lg font-semibold text-cyan-700 text-right pr-5 md:pr-2' type='text' placeholder='Custom' onClick={() => setSelectedButton(null)} onChange={(e) => setTip(parseFloat(e.target.value) / 100)} />
                        </div>
                    </div>

                    <div className='md:pl-10 pr-3 py-6'>
                        <div className='flex justify-between'>
                            <p className='text-cyan-700'>Number of People</p>
                            <p className='text-orange-500 pr-2'>{people === 0 ? "Can't be zero" : ''}</p>
                        </div>
                        <div className='relative'>
                            <span className='absolute text-gray-400 text-2xl font-normal top-[14px] left-4'>
                                <img src={person} alt='Person Icon' />
                            </span>
                            <input value={people === 0 ? '' : people} type='number' placeholder='0' className='bg-cyan-50 h-12 rounded-xl text-xl text-right pr-5 w-full' onChange={(e) => setPeople(parseFloat(e.target.value))} min={0} onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()} />
                        </div>
                    </div>
                </div>
                <div className='bg-cyan-700 w-full md:w-1/2 md:m-5 rounded-xl'>
                    <div>
                        <div className='flex px-10 pt-10 justify-between'>
                            <div>
                                <p className='text-whiteColor'>Tip Amount</p>
                                <p className='text-lightGrayishCyan opacity-50 text-sm'>/ person</p>
                            </div>
                            <p className='text-strongCyan text-2xl md:text-4xl'>{`$${tipPer.toFixed(2)}`}</p>
                        </div>
                        <div className='flex px-10 py-4 md:p-10 justify-between'>
                            <div>
                                <p className='text-whiteColor'>Total</p>
                                <p className='text-lightGrayishCyan opacity-50 text-sm'>/ person</p>
                            </div>
                            <p className='text-strongCyan text-2xl md:text-4xl'>{`$${totalPer.toFixed(2)}`}</p>
                        </div>
                    </div>
                    <div className='px-4 md:px-10 pb-4 pt-3 md:py-6 mt-0 md:mt-20'>
                        <button className='bg-strongCyan w-full h-12 rounded-lg hover:bg-lightGrayishCyan hover:text-veryDarkCyan' onClick={handleReset}>RESET</button>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default CalculatorComponent