import React from 'react'

export default function Appointment() {
  return (
    <div className="flex flex-col items-center bg-gray-200">
      <div className="font-bold my-10 text-lg">
        Book Appointment Date 
      </div>
      <div className="grid grid-cols-2 gap-6 w-3/5">

        <div className="flex flex-col">
          <label htmlFor="firstName">Full Name</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="text" placeholder="Full Name" />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="lastName">Gender</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="text" placeholder="Inter your gender" />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="firstName">Phone</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="number" placeholder="9999999999" />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="date">Appointment</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="date" placeholder="Inter Your Appointment Date " />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="code">Pin Code</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="number" placeholder="Pin code" />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="age">Age</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="number" placeholder="age"/>
        </div>
           
        <div className='flex flex-col col-span-full'>
          <label htmlFor="address">Address</label>
          <input className="border border-slate-600 rounded-md py-1 px-3 mt-3 w-full" type="text" placeholder="Address" />
        </div>

        <div className="col-span-full mb-10">
            <button className="w-full rounded-md text-white px-auto py-3" style={{backgroundColor:'rgb(75, 164, 161)'}}type='submit'>Book Appointment </button>
        </div>
      </div>
    </div>
  )
}
