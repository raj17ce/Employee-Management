import React from 'react';

function AddEmployee() {
    return (
        <div className="flex mx-auto max-w-2xl border-2 border-neutral-800 rounded shadow mt-10">
            <div className='px-4 py-4 mx-auto'>
                <div className="my-6">
                    <h1 className="font-bold text-2xl text-center">Add New Employee</h1>
                </div>
                <div className="mt-6 p-8 text-center">
                    <input type="text" placeholder="First Name" className="border-2 border-neutral-900 rounded py-2 px-4 w-96 my-2" />
                    <input type="text" placeholder="Last Name" className="border-2 border-neutral-900 rounded py-2 px-4 w-96 my-2" />
                    <input type="email" placeholder="Email" className="border-2 border-neutral-900 rounded py-2 px-4 w-96 my-2" />
                    <input type="text" placeholder="Department" className="border-2 border-neutral-900 rounded py-2 px-4 w-96 my-2" />
                    <input type="text" placeholder="Salary" className="block border-2 border-neutral-900 rounded py-2 px-4 w-96 my-2 mx-auto" />
                    <button className='mx-4 rounded text-white font-bold bg-green-600 hover:bg-green-900 my-6 py-1 px-4 text-xl'>
                        Add
                    </button>
                    <button className='mx-4 rounded text-white font-bold bg-red-600 hover:bg-red-900 my-6 py-1 px-4 text-xl'>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee;