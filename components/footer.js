const Footer = () => {
    return (
      <footer className="flex">
        <div className="bg-medium-gray w-2/5 py-24 px-24 font-medium">
          <h2 className="text-white text-6xl mb-8 tracking-wide">PcariMovie</h2>
          <p className="text-white mb-8 font-extralight leading-8 pr-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae earum voluptatem, eos culpa praesentium blanditiis sapiente, cupiditate architecto laborum corporis omnis molestias natus tempore libero! Possimus qui repudiandae similique quasi.</p>
          <h4 className="text-white text-l mb-4">Join Newsletters</h4>
          <form action="" method="post">
            <div className="relative mb-8">
              <div className="absolute inset-y-2 left-56 flex items-center px-3 bg-red rounded-lg">
                <img id="arrow" width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/48/right.png" alt="right"/>
              </div>
              <input type="email" name="email" id="email" placeholder="Insert your mail here" className="py-5 px-6 rounded-lg bg-gold text-white placeholder-[#9a9ab0] font-light focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
          </form>
        </div>
        <div className="bg-gray w-3/5 py-24 px-0">
          <div className="grid w-9/12 grid-cols-3 px-24 py-16">
            <div>
              <h4 className="text-white text-l mb-7 font-medium">Product</h4>
              <ul>
                <li className="text-white mb-7 font-extralight text-l">Movies</li>
                <li className="text-white mb-7 font-extralight text-l">TV Show</li>
                <li className="text-white font-extralight text-l">Videos</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-l mb-7 font-medium">Media Group</h4>
              <ul>
                <li className="text-white mb-7 font-extralight text-l">Nice Studio</li>
                <li className="text-white mb-7 font-extralight text-l">Nice News</li>
                <li className="text-white font-extralight text-l">Nice TV</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-l mb-7 font-medium">Sitemap</h4>
              <ul>
                <li className="text-white mb-7 font-extralight text-l">About</li>
                <li className="text-white mb-7 font-extralight text-l">Careers</li>
                <li className="text-white font-extralight text-l">Press</li>
              </ul>
            </div>
          </div>
          <div className="px-24 mt-6 flex justify-start items-center space-x-6">
            <p className="text-white mb-6 flex items-center font-extralight"><img width="20" height="20" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/place-marker--v1.png"  alt="place-marker" className="w-5 h-5 mr-3" />8819 Ohio St. South Gate, California 90820</p>
            <p className="text-white mb-6 flex items-center font-extralight"><img width="24" height="24" src="https://img.icons8.com/windows/32/FFFFFF/new-post.png" alt="email" className="w-6 h-6 mr-3" />ourstudio@hello.com</p>
            <p className="text-white mb-6 flex items-center font-extralight"><img width="32" height="32" src="https://img.icons8.com/sf-regular/48/FFFFFF/phone.png" alt="phone" className="w-8 h-8 mr-3" />+271 386-647-3637</p>
          </div>
        </div>
      </footer>
    );
};
  
export default Footer;
  