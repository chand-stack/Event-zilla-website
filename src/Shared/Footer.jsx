const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white ">
      <nav>
        <header className="text-3xl font-bold text-white">EventZilla</header>
      </nav>
      <nav>
        <header className="text-xl font-bold text-pink-500">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="text-xl font-bold text-pink-500">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <header className="text-xl font-bold text-pink-500">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="text-white">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16 text-black"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-pink-500 border-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
