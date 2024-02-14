import React from 'react'
import Navbar from '../components/Navbar'
import TestingNav from '../components/TestingNav'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <TestingNav />
      <div class="container mx-auto my-20 w-1/3 bg-white font-montserrat shadow-2l">
        <div class="p-5 space-y-5 shadow-xl">
          <h4 class="text-center text-3xl">Contact Us</h4>
          <form action="mailto:shirazhussain2015@gmail.com">
            <div class="grid grid-cols-2 gap-5">
              <input
                type="text"
                class="border border-black px-4 py-2 focus:outline-none focus:border-[#00A256]"
                placeholder="First Name"
              />
              <input
                type="text"
                class="border border-black px-4 py-2 focus:outline-none focus:border-[#00A256"
                placeholder="Last Name"
              />
              <input
                type="email"
                class="border border-black px-4 py-2 focus:outline-none focus:border-[#00A256] col-span-2"
                placeholder="Email"
              />
              <input
                type="tel"
                class="border border-black px-4 py-2 focus:outline-none focus:border-[#00A256] col-span-2"
                placeholder="Phone"
              />
              <textarea
                cols="10"
                rows="5"
                class="border border-black px-4 py-2 focus:outline-none focus:border-[#00A256] col-span-2"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send Message"
              class="focus:outline-none mt-5 bg-[#00A256]  py-2 text-white font-bold w-full"
            >Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page