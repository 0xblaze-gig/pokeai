export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              The Future of <span className="text-primary">Pokemon</span> & <span className="text-primary">AI</span> Crypto
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-lg">
              $POKEAI combines the beloved world of Pokemon with cutting-edge AI technology to create a revolutionary cryptocurrency experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-primary">
                <h3 className="font-heading font-bold text-lg mb-2 text-primary">Coming Soon on Solana!</h3>
                <p className="text-gray-700 mb-4">
                  To purchase $POKEAI when it launches:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Load your Phantom wallet with $SOL</li>
                  <li>Visit our exchange when we launch</li>
                  <li>Swap your $SOL for $POKEAI tokens</li>
                </ol>
              </div>
            </div>
            <div className="flex items-center space-x-6 mt-8">
              <a href="https://x.com/@PokeAionSOL" className="text-gray-700 hover:text-primary transition-colors duration-300">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              {/* <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-300">
                <i className="fab fa-telegram text-2xl"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-300">
                <i className="fab fa-discord text-2xl"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-300">
                <i className="fab fa-medium text-2xl"></i>
              </a> */}
            </div>
          </div>
          <div className="md:w-1/2">
            {/* Hero image replaced with SVG representation since we can't use binary images */}
            <div className="w-full rounded-lg shadow-xl bg-gray-100 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <svg className="w-3/4 h-3/4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="30" fill="#FF5A5F" />
                <circle cx="50" cy="50" r="15" fill="white" />
                <circle cx="50" cy="50" r="7" fill="#FF5A5F" />
                <text x="50" y="85" textAnchor="middle" fill="#333" fontSize="8" fontWeight="bold">$POKEAI</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
