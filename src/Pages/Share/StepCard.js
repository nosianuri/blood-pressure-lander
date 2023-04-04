import React from 'react';
import { useState } from 'react'
import { Transition } from '@headlessui/react'

const StepCard = () => {
  const [step, setStep] = useState(1)

  const handleSubmit = (event) => {
    event.preventDefault()
    setStep(step + 1)
  }
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <Transition
          show={step === 1}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-full"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-full"
            />
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </Transition>

        <Transition
          show={step === 2}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-full"
            ></textarea>
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Transition>
      </form>
    </div>
  )
}

export default StepCard;