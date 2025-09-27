const Header = () => (
  <header className="bg-teal-700 p-4 shadow-lg text-center">
    <div className="container mx-auto my-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
        Carta Numerológica
      </h1>
      <h6 className="text-sm font-medium text-gray-200">
        Cortesía de
        <a
          href="http://luzdevida.xyz/numeramon/"
          className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
        >
          <em className="not-italic"> NUMERAmón</em>
        </a>
      </h6>
    </div>
  </header>
);
export default Header;
