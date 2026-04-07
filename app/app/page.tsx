export default function LiveInSuitesChicSite() {
  return (
    <div className="min-h-screen bg-[#f8f3ee] text-[#2f241f]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f3ee] via-[#f3e8df] to-[#e8d8cc]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#8b6f61]">
                LiveInSuites LLC
              </div>

              <h1 className="max-w-xl text-5xl font-semibold leading-tight md:text-6xl">
                Chic stays for modern living.
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#5c4b43]">
                LiveInSuites offers stylish short-term and flexible living solutions
                designed for comfort, convenience, and a polished guest experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-[#2f241f] px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02]"
                >
                  Inquire Now
                </a>

                <a
                  href="#services"
                  className="rounded-full border border-[#2f241f]/20 bg-white/70 px-6 py-3 text-sm font-medium text-[#2f241f] backdrop-blur transition hover:bg-white"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white/80 p-4 shadow-xl backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
                  alt="Elegant bedroom interior"
                  className="h-72 w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="mt-10 rounded-[2rem] bg-white/80 p-4 shadow-xl backdrop-blur sm:mt-16">
                <img
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80"
                  alt="Modern chic living room"
                  className="h-72 w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Short-Term Stays',
              text: 'Thoughtfully curated stays for guests seeking style, comfort, and flexibility.',
            },
            {
              title: 'Mid-Term Living',
              text: 'Ideal for relocations, work travel, and temporary housing needs with a refined feel.',
            },
            {
              title: 'Guest Experience',
              text: 'Clean, welcoming, and elevated spaces designed to make every stay feel effortless.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-[#2f241f]/10 bg-white/70 p-8 shadow-sm backdrop-blur"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#5c4b43]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f61]">Services</p>
            <h2 className="mt-3 text-4xl font-semibold">
              Designed for elevated temporary living
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5c4b43]">
              Our approach blends comfort, convenience, and a chic aesthetic to create
              spaces that feel polished, peaceful, and move-in ready.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#efe3d8] p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">What guests can expect</h3>
              <ul className="mt-6 space-y-4 text-[#5c4b43]">
                <li>• Stylish furnished accommodations</li>
                <li>• Clean, curated interiors</li>
                <li>• Flexible stay options</li>
                <li>• Professional communication and support</li>
              </ul>
            </div>

            <div className="rounded-[2rem] bg-[#2f241f] p-8 text-white shadow-sm">
              <h3 className="text-2xl font-semibold">Perfect for</h3>
              <ul className="mt-6 space-y-4 text-white/80">
                <li>• Traveling professionals</li>
                <li>• Relocation stays</li>
                <li>• Temporary housing needs</li>
                <li>• Guests seeking comfort with style</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f61]">About</p>
            <h2 className="mt-3 text-4xl font-semibold">
              A modern brand with a soft luxury feel
            </h2>
            <p className="mt-5 leading-8 text-[#5c4b43]">
              LiveInSuites LLC was created with a vision to provide beautiful, flexible
              accommodations that feel both welcoming and elevated. Our brand is rooted
              in thoughtful details, seamless experiences, and spaces that leave a lasting impression.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/80 p-4 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
              alt="Chic dining and living area"
              className="h-[26rem] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#2f241f] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Contact
              </p>
              <h2 className="mt-3 text-4xl font-semibold">Let’s connect</h2>
              <p className="mt-5 max-w-lg leading-8 text-white/75">
                Interested in future stays, partnerships, or learning more about LiveInSuites?
                Reach out and we’ll be happy to connect.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur">
              <div className="space-y-5 text-white/85">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                    Business
                  </p>
                  <p className="mt-2 text-xl">LiveInSuites LLC</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                    Phone
                  </p>
                  <p className="mt-2 text-xl">551-795-7921</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                    Email
                  </p>
                  <p className="mt-2 text-xl">liveinsuites@gmail.com</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                    Hours
                  </p>
                  <p className="mt-2 text-xl">Mon – Fri, 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
