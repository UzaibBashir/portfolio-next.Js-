import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div>
          <h3 class="text-white font-bold text-lg mb-4">Contact Info</h3>
          <div class="space-y-2 text-gray-400">
              <div class="flex items-center space-x-2">
                  <i class="bi bi-envelope"></i>
                  <a
          href="mailto:youremail@example.com"
          className="inline-block mt-4 border border-neutral-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          youremail@example.com
        </a>
              </div>
              <div class="flex items-center space-x-2">
                  <i class="bi bi-geo-alt"></i>
                  <span>India</span>
              </div>
              <div class="flex items-center space-x-2">
                  <i class="bi bi-clock"></i>
                  <span>Available for freelance</span>
              </div>
          </div>
      </div>
      </section>
  )
}

export default Contact
