import React from 'react';

const Booking = () => {
    return (
        <div className='flex justify-between md:w-[1100px] gap-16 mx-auto mt-20'>
            <div className='w-1/2'>
                <h1 className='text-5xl'>Cox's bazar</h1>
                <p>Coxs Bazar is a town on the southeast coast of Bangladesh. Its known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>

            <div className='w-1/2 bg-slate-100 p-8'>
                <form>
                    <div>
                        <h4>Origin</h4>
                        <input type="text" placeholder="Dhaka" className="input input-bordered mt-2 mb-3 w-full bg-white max-w-xs" />

                        <h4>Destination</h4>
                        <input type="text" placeholder="Cox-Bazar" className="input mt-2 mb-3 input-bordered w-full bg-white max-w-xs" />

                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <h2>From</h2>
                            <input type="text" placeholder="01/09" className="input mt-2 input-bordered w-full bg-white max-w-xs" />
                        </div>
                        <div>
                            <h4>To</h4>
                            <input type="text" placeholder="12/09" className="input mt-2 input-bordered w-full bg-white max-w-xs" />
                        </div>
                    </div>

                    <button className='btn w-full bg-[#F9A51A] text-black mt-5'>Start Booking</button>


                </form>
            </div>
        </div>
    );
};

export default Booking;