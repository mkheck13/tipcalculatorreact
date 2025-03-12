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

    // useEffect(() => {
    //     if (bill > 0 && people > 0 && tip > 0) {
    //         setTipPer((bill * tip) / people);
    //         setTotalPer((bill + bill * tip) / people);
    //     }
    // }, [tip, bill, people]);

    useEffect(() => {
        if (bill > 0 && people > 0 && tip > 0) {
            const tipAmount = (bill * tip) / people;
            const totalAmount = (bill + bill * tip) / people;
            setTipPer(tipAmount);
            setTotalPer(totalAmount);
        }
    }, [tip, bill, people]);

    const handleTipSelection = (percentage) => {
        setTip(percentage / 100);
        setSelectedButton(percentage);
    }

    const handleInputChange = (setter) => (e) => {
        const value = parseFloat(e.target.value);
        setter(isNaN(value) ? 0 : value);
    }

    const handleReset = () => {
        setBill(0);
        setPeople(0);
        setTip(0);
        setSelectedButton(null);
        setTipPer(0);
        setTotalPer(0);
    };

  return (
    <div className='flex min-h-screen flex-col items-center pt-10 md:p-24'>
            <img src={logo} alt='Splitter Logo' className='mx-auto' />
            <div className='flex flex-col lg:flex-row bg-white w-screen md:w-7/12 h-1/3 shadow-sm shadow-grayCyan rounded-2xl md:mx-auto mt-20 px-5 py-4 md:p-2 max-md:text-sm'>
                <div className='w-full md:w-1/2'>
                    <div className='md:pl-10 md:pr-3 py-6'>
                        <p className='text-darkGrayCyan'>Bill</p>
                        <div className='relative'>
                            <span className='absolute text-gray-400 text-2xl font-normal top-[14px] left-4'>
                                <img src={dollar} alt='Dollar Sign' />
                            </span>
                            <input 
                            value={bill || ''} 
                            type='number' 
                            placeholder='0' 
                            className='bg-lightGray h-12 rounded-xl text-xl text-right pr-5 w-full' 
                            onChange={handleInputChange(setBill)} 
                            min={0} 
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()} />
                        </div>
                    </div>

                    <div className='md:pl-10'>
                        <p className="pt-10 pb-3">Select Tip %</p>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 text-xl sm:text-lg'>
                            {[5, 10, 15, 25, 50].map((percentage) => (
                                <button key={percentage} 
                                className={`${selectedButton === percentage ? 'bg-strongCyan text-veryDarkCyan' : 'bg-veryDarkCyan text-white'} text-2xl w-full min-w-[80px] h-12 rounded-lg font-semibold hover:bg-lightGrayCyan hover:text-veryDarkCyan`} 
                                onClick={() => handleTipSelection(percentage)}>
                                    {percentage}%
                                </button>
                            ))}
                            <input 
                            className="text-2xl bg-lightGray w-full min-w-[80px] h-12 rounded-lg font-semibold text-veryDarkCyan text-right pr-5 md:pr-3" 
                            type='number' 
                            placeholder='Custom' 
                            value={tip > 0 ? tip * 100 : ''}
                            onClick={() => setSelectedButton(null)} 
                            onChange={(e) => setTip(e.target.value ? parseFloat(e.target.value) / 100 : 0)} />
                        </div>
                    </div>

                    <div className='md:pl-10 pr-3 py-6'>
                        <div className='flex justify-between'>
                            <p className='text-darkGrayCyan'>Number of People</p>
                            <p className='text-orange-500 pr-2'>{people === 0 && bill > 0 ? "Can't be zero" : ''}</p>
                        </div>
                        <div className='relative'>
                            <span className='absolute text-gray-400 text-2xl font-normal top-[14px] left-4'>
                                <img src={person} alt='Person Icon' />
                            </span>
                            <input 
                            value={people || ''} 
                            type='number' 
                            placeholder='0' 
                            className='bg-lightGray h-12 rounded-xl text-xl text-right pr-5 w-full' 
                            onChange={handleInputChange(setPeople)} 
                            min={1} 
                            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()} />
                        </div>
                    </div>
                </div>
                <div className='bg-veryDarkCyan w-full md:w-1/2 md:m-5 rounded-xl'>
                    <div>
                        <div className='flex px-10 pt-10 justify-between'>
                            <div>
                                <p className='text-white'>Tip Amount</p>
                                <p className='text-lightGrayCyan opacity-50 text-sm'>/ person</p>
                            </div>
                            <p className='text-strongCyan text-2xl md:text-4xl'>{tipPer > 0 ? `$${tipPer.toFixed(2)}` : '$0.00'}</p>
                        </div>
                        <div className='flex px-10 py-4 md:p-10 justify-between'>
                            <div>
                                <p className='text-white'>Total</p>
                                <p className='text-lightGrayCyan opacity-50 text-sm'>/ person</p>
                            </div>
                            <p className='text-strongCyan text-2xl md:text-4xl'>{totalPer > 0 ? `$${totalPer.toFixed(2)}` : '$0.00'}</p>
                        </div>
                    </div>
                    <div className='px-4 md:px-10 pb-4 pt-3 md:py-6 mt-0 md:mt-20'>
                        <button className='bg-strongCyan w-full h-12 rounded-lg hover:bg-lightGrayCyan hover:text-veryDarkCyan' onClick={handleReset}>RESET</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CalculatorComponent