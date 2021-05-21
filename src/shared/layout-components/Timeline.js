const Timeline = ({ events }) => {
  return (
    <div class="container" id="timeline">
      <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        <div class="flex flex-row-reverse md:contents">
          <div class="bg-card-bg col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h4 className="text-xl font-bold text-main-brand flex items-center mb-2">
              2019 - NOW
            </h4>
            <h3 class="font-semibold text-lg mb-4">
              WeOwn AG, Munchen, Germany, Sarajevo office (full time) — Frontend
              Tech Lead
            </h3>
            <p class="leading-tight text-justify">
              Currenly leading development of WeOwn web and mobile applications
              working on top of WeOwn Blockchain.
            </p>
          </div>
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-card-bg pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-card-bg shadow"></div>
          </div>
        </div>

        <div class="flex flex-row-reverse md:contents">
          <div class="bg-card-bg col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h4 className="text-xl font-bold text-main-brand flex items-center mb-2">
              2019 - NOW
            </h4>
            <h3 class="font-semibold text-lg mb-4">
              Findustrial GmbH, Schörfling am Attersee, Austria, remote (part
              time) — Frontend Tech Lead
            </h3>
            <p class="leading-tight text-justify">
              Frontend tech lead on developing Findustral’s pay-per use fintech
              platform.
              <ul class="mt-4">
                <li>
                  Findustrial website -{" "}
                  <a
                    className="text-main-accent hover:underline"
                    href="https://findustrial.io"
                    rel="noreferrer"
                    target="_blank"
                  >
                    https://findustrial.io
                  </a>
                </li>
                <li>
                  Findustrial platform -{" "}
                  <a
                    className="text-main-accent hover:underline"
                    href="https://app.findustrial.io"
                    rel="noreferrer"
                    target="_blank"
                  >
                    https://app.findustrial.io
                  </a>
                </li>
              </ul>
            </p>
          </div>
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-card-bg pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-card-bg shadow"></div>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-card-bg pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-card-bg shadow"></div>
          </div>
          <div class="bg-card-bg col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h4 className="text-xl font-bold text-main-brand flex items-center mb-2">
              2015 - 2019
            </h4>
            <h3 class="font-semibold text-lg mb-4">
              Freelance, Sarajevo — Frontend Developer, Android Developer
            </h3>
            <p class="leading-tight text-justify">
              Coding Angular web apps, working on my own ideas and helping
              friends on their own projects. Working with Angular framework
              since Angular 2 and I have experience with: Angular design
              patterns RXJS, Observables, operators … REDUX state management in
              Angular applications using NGRX Hybrid mobile applications using
              Ionic Framework and Angular Building reusable code and libraries
              for future use in Angular
            </p>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-card-bg pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-card-bg shadow"></div>
          </div>
          <div class="bg-card-bg col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h4 className="text-xl font-bold text-main-brand flex items-center mb-2">
              2017 - 2019
            </h4>
            <h3 class="font-semibold text-lg mb-4">
              Virtuooza.com — Frontend Developer, Blogger
            </h3>
            <p class="leading-tight text-justify">
              Virtuooza.com development blog is my personal project. All I know,
              I learned online watching and reading tutorials. People spend
              their valuable time writing quality content and sharing their
              knowledge with others. I decided to do the same for the next
              generation of developers, share my knowledge and experience by
              providing quality tutorials and advice. You can read my articles
              here:{" "}
              <a
                className="text-main-accent hover:underline"
                href="https://virtuooza.com/author/akira"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                https://virtuooza.com
              </a>
            </p>
          </div>
        </div>

        <div class="flex flex-row-reverse md:contents">
          <div class="bg-card-bg col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h4 className="text-xl font-bold text-main-brand flex items-center mb-2">
              2010 - 2014
            </h4>
            <h3 class="font-semibold text-lg mb-4">
              Werk.se, Stockholm, Sweden — Remote Frontend Developer
            </h3>
            <p class="leading-tight text-justify">
              Worked remotely. Coded designs into functional, responsive themes
              for e17 CMS and Wordpress CMS. Created custom plugins for
              Wordpress and implemented new features to already running web
              sites. Worked with a team of designers and content creators to
              meet all customer demands.
            </p>
          </div>
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-card-bg pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-card-bg shadow"></div>
          </div>
        </div>
        <div class="flex flex-row-reverse md:contents">
          <div class="bg-card-bg col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h4 className="text-xl font-bold text-main-brand flex items-center mb-2">
              2008 - 2011
            </h4>
            <h3 class="font-semibold text-lg mb-4">
              Sudo Host Inc, Ontario, Canada — Remote Frontend Developer
            </h3>
            <p class="leading-tight text-justify">
              Website design and development, graphic design. Provided help to
              web hosting customers, built custom solutions for customer needs.
            </p>
          </div>
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-card-bg pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-card-bg shadow"></div>
          </div>
        </div>
        <div class="flex md:contents">
          <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-card-bg pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-card-bg shadow"></div>
          </div>
          <div class="bg-card-bg col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h4 className="text-xl font-bold text-main-brand flex items-center mb-2">
              2005 - 2012
            </h4>
            <h3 class="font-semibold text-lg mb-4">
              Akirapowered.com — Frontend Developer
            </h3>
            <p class="leading-tight text-justify">
              Personal website project offering free and premium Wordpress and
              e107CMS themes and plugins. This project helped me grow as
              developer, acquire new skills and meet many great friends from all
              over the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
