export default function Contact() {
  return (
    <section id="contact" className="container flex items-start justify-between mb-10 lg:mb-2 sm:flex-col sm:items-center">
      <div className="w-1/2 sm:w-full">
        <h2 className="text-white sm:text-[32px] mb-4 sm:">Let’s get started</h2>
        <p className="parTwo max-w-[526px] text-[#8491A0] sm:mb-5">
          Now that you know a lot about me, let me know if you are interested to work with me.
        </p>
      </div>
      <div className="w-1/2 max-w-[526px] sm:w-full" clas>
        <form >
          <label className="text-white parTwo">
            Name
            <input className="w-full text-white focus:outline-none bg-[#181823] py-3 mb-8" type="text" name="name" id="name" />
          </label>
          <label className="text-white parTwo">
            Email
            <input className="w-full text-white focus:outline-none bg-[#181823] py-3 mb-8" type="email" name="email" id="email" />
          </label>
          <label className="text-white parTwo">
            Message
            <textarea name="message" id="message" rows={5} cols={50} className="w-full text-white focus:outline-none bg-[#181823] mb-8"></textarea>
          </label>
          <button type="submit" className="bg-[#5221E6] border-none w-full py-5 px-10 text-white">
            Let’s get started
          </button>
        </form>
      </div>
    </section>
  );
}
