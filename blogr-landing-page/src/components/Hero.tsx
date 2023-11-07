import statS from "../assets/illustration-editor-mobile.svg";
import statL from "../assets/illustration-editor-desktop.svg";
import phone from '../assets/illustration-phones.svg';
import circles from '../assets/bg-pattern-circles.svg';
import laptopS from '../assets/illustration-laptop-mobile.svg';
import laptopL from '../assets/illustration-laptop-desktop.svg';

export const Hero = () => {
  return (
    <div
      className="pt-[10rem] lg:pt-[13rem] sm:pt-[13rem] w-[30rem] sm:w-[40rem] m-auto md:w-[45rem] lg:w-auto"
      id="container"
    >
      <div
        className="flex flex-col justify-center items-center text-center m-auto"
        id="future-content"
      >
        <div id="header-text">
          <h1 className="text-darkblue font-medium relative top-[-1.5rem] lg:top-[.5rem] 2xl:text-[2.5rem]">
            Designed for the future
          </h1>
        </div>

        <div
          className="flex flex-col lg:flex-row-reverse relative lg:left-[2.5rem] xl:left-[3rem] 2xl:left-[5.5rem]"
          id="under-header-content"
        >
          <div className="flex flex-col justify-center" id="img">
            <img
              src={statS}
              alt="statS"
              className="lg:hidden relative sm:left-[4.2rem] md:left-[6.5rem] w-[30rem] sm:w-[32rem]"
            />

            <img
              src={statL}
              alt="statL"
              className="hidden lg:block w-[35rem] xl:w-[45rem] relative xl:left-[8.4rem] 2xl:w-[55rem]
              md:top-[2rem] xl:top-[-4rem] lg:top-0 lg:left-[5rem] 2xl:top-[-7rem]"
            />
          </div>

          <div
            className="p-[2.5rem] px-[3.5rem] leading-relaxed space-y-10 lg:text-[.85rem] lg:w-[35rem] lg:text-start
            relative xl:top-[2rem] xl:left-[5rem] xl:w-[40rem] 2xl:w-[45rem] 2xl:top-[3rem]"
            id="paragraphs"
          >
            <div className="" id="p1">
              <h1 className="text-darkblue font-medium 2xl:text-[2.1rem]">
                Introducing an extensible editor
              </h1>

              <p className="text-darkgrayishblue lg:text-[.9rem] 2xl:text-[1rem]">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos , and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>

            <div className="" id="p2">
              <h1 className="text-darkblue font-medium 2xl:text-[2.1rem]">
                Robust content management
              </h1>

              <p className="text-darkgrayishblue lg:text-[.9rem] 2xl:text-[1rem]">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format or flow. With this functionality,
                you're in full control.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#292958] mt-[20rem] h-[45rem] lg:h-[24rem] w-[40rem] sm:w-[65rem] 
        lg:mt-[12rem] lg:w-[80rem] xl:w-[100rem] 2xl:w-[110rem] z-[-2] 2xl:mt-[1rem]" id="phone-section">
          <div className="flex flex-col lg:flex-row" id="content-table">
            <img src={phone} alt="phone" 
            className="z-[1000] relative top-[-15rem] w-[30rem] sm:w-[33rem] lg:top-[-2rem] lg:left-[7.5rem] m-auto lg:w-[27rem]
            xl:left-[13rem] 2xl:w-[35rem] 2xl:left-[12rem] 2xl:top-[-9rem]"/>
            <img src={circles} alt="circles" className="relative top-[-36.5rem] z-[-1] sm:w-[35rem] m-auto lg:left-[-29rem]
            lg:top-[-6rem] lg:w-[40rem] xl:left-[-25rem] 2xl:w-[45rem] 2xl:top-[-11rem] 2xl:left-[-33rem]"/>

            <div 
            className="p-[9rem] sm:p-[14rem] relative top-[-62rem] sm:top-[-64rem] lg:left-[-33rem] lg:top-[2rem]
            lg:text-start lg:p-10 xl:left-[-24rem] 2xl:left-[-27rem]"
            id="text-wrapper-p">
              <h1 className="text-white font-medium text-[2.5rem] pb-4 lg:w-[35rem] 2xl:w-[42rem]">
                State of the Art Infrastructure
              </h1>

              <p className="text-white leading-loose 2xl:text-[1.1rem]">
                With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[5rem] lg:mt-[10rem] sm:pb-[10rem] sm:pt-[5rem] lg:flex-row xl:pt-[10rem] lg:ml-[-11.5rem] 2xl:ml-[-28.5rem]
        xl:ml-[-17rem]" id="laptop-section">
          <div className="m-auto" id="laptop-img">
            <img src={laptopS} alt="laptopS" className="sm:w-[100rem] sm:ml-[0rem] xl:ml-[-13rem] 2xl:ml-[-15.5rem] lg:hidden"/>
            <img src={laptopL} alt="laptopL" className="hidden lg:block"/>
          </div>

          <div 
          className="p-[4rem] space-y-[3rem] lg:text-start sm:p-[0rem] lg:w-[50rem] relative sm:w-[30rem] md:w-[35rem] m-auto lg:top-[3.5rem]
          xl:top-[0rem] 2xl:text-[1.1rem] 2xl:top-[1rem] 2xl:left-[5rem] xl:w-[40rem] pb-[6rem]" 
          id="text-wrapper-L">
            <div className="" id="p1-L">
              <h1 className="font-medium text-darkblue pb-3">Free, open, simple</h1>

              <p className="text-darkgrayishblue leading-loose">
                Blogr is a free and open source application backed by a large community of helpful developers. It supports features
                such as code syntax highlighting. RSS feeds, social media integration, third party commenting tools, and works seamlessly
                with google Analytics. The architecture is clean and is relatively easy to learn.
              </p>
            </div>

            <div className="" id="p2-L">
              <h1 className="text-darkblue font-medium pb-3">Powerful tooling</h1>

              <p className="text-darkgrayishblue leading-loose">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployement a breeze,
                but capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
