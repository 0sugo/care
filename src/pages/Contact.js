import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gradient-to-t from-trabg-transparent">
      <section id="contact">
        <div className="container mx-auto p-4">
          <div className="text-center my-8">
            <h1 className="text-[#f0a202] mb-10"><b>Contact Us</b></h1>
            <h3 className="text-[#00000087]"><b>We would Love to hear from you</b></h3>
          </div>
          <div className="flex items-center justify-center my-20">
            <form action="">
              <div className="flex flex-col md:flex-row lg:gap-32">
                <div className="p-4">
                  <label htmlFor="name">
                    <input
                      type="text"
                      required
                      placeholder="NAME"
                      className="py-3 placeholder-[#00000080]  border-b-2 border-[#00000080] focus:outline-none w-full bg-transparent"
                    />
                  </label>
                </div>
                <div className="p-4">
                  <label htmlFor="email">
                    <input
                      type="email"
                      required
                      placeholder="EMAIL"
                      className="py-3  placeholder-[#00000080] border-b-2 border-[#00000080] focus:outline-none w-full bg-transparent"
                    />
                  </label>
                </div>
              </div>
              {/* <div className="flex flex-wrap lg:gap-32 sm:gap-0"> */}
              <div className="flex flex-col md:flex-row lg:gap-32">
                <div className="p-4">
                  <label htmlFor="website">
                    <input
                      type="text"
                      placeholder="WEBSITE(optional)"
                      className="py-3 placeholder-[#00000080] border-b-2 border-[#00000080] focus:outline-none w-full bg-transparent"
                    />
                  </label>
                </div>
                <div className="p-4">
                  <label htmlFor="subject">
                    <input
                      type="text"
                      required
                      placeholder="SUBJECT"
                      className="py-3 placeholder-[#00000080] border-b-2 border-[#00000080] focus:outline-none w-full bg-transparent"
                    />
                  </label>
                </div>
              </div>
              <div className="p-4">
                <label htmlFor="message">
                  <textarea name="message" id="message"
                    cols="50" rows="1"
                    required
                    placeholder="MESSAGE"
                    className="py-3 placeholder-[#00000080] border-b-2 border-[#00000080] focus:outline-none w-full bg-transparent"
                  ></textarea>
                </label>
              </div>
              <div className="p-4 text-center lg:mt-8">
                <button className="bg-[#293241] text-white px-5 py-2 rounded-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
