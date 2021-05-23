import StrokeIcon from "../icon-components/StrokeIcon";

const Projects = () => (
  <div
    id="projects"
    className="grid grid-cols-1 sm:grid-cols-3 sm:gap-12 my-12 w-full"
  >
    <div className="col-span-3">
      <h4 className="text-xl font-bold text-main-brand flex items-center mb-6">
        <StrokeIcon />
        Projects
      </h4>
      <h2 className="text-4xl font-bold text-white mb-12">
        Some of my recent projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div className="card">
          <div>
            <h4 className="card-subtitle">Definity</h4>
            <h2 className="card-title">Clarity</h2>
            <p>
              The Clarity app by DeFinity allows you to register and manage the
              DEFX token, and to trade foreign currencies, CBDC’s and stable
              coins (in future).
            </p>
          </div>
          <div className="tag-list">
            <div className="tag mr-2">PWA</div>
            <div className="tag mr-2">Angular</div>
            <div className="tag">Blockchain</div>
          </div>
        </div>
        <div className="card">
          <h4 className="card-subtitle">WeOwn</h4>
          <h2 className="card-title">Blockchain Explorer</h2>
          <p>
            Own Blockchain Explorer is web application powered by Angular
            framework. Blockchain Explorer gives insight into all transactions
            on the blockchain, check the status of any transaction, and review
            how many assets you have.
          </p>
          <div className="tag-list">
            <div className="tag mr-2">WebApp</div>
            <div className="tag mr-2">Angular</div>
            <div className="tag">Blockchain</div>
          </div>
        </div>
        <div className="card">
          <div>
            <h4 className="card-subtitle">WeOwn</h4>
            <h2 className="card-title">Wallet</h2>
            <p>
              Wallet is web application for managing your CHX tokens. Send,
              receive, stake or bridge CHX tokens to other blockchains. Sign
              messages with your private key.
            </p>
          </div>
          <div className="tag-list">
            <div className="tag mr-2">WebApp</div>
            <div className="tag mr-2">Angular</div>
            <div className="tag">Blockchain</div>
          </div>
        </div>
        <div className="card">
          <div>
            <h4 className="card-subtitle">WeOwn</h4>
            <h2 className="card-title">Localization App</h2>
            <p>
              Web application for localization management in WeOwn apps. Allows
              adding translation terms for different languages, searching and
              filtering by term or translation.
            </p>
          </div>
          <div className="tag-list">
            <div className="tag mr-2">WebApp</div>
            <div className="tag mr-2">Angular</div>
          </div>
        </div>
        <div className="card">
          <div>
            <h4 className="card-subtitle">WeOwn</h4>
            <h2 className="card-title">Market Operator App</h2>
            <p>
              Web application for managing WeOwn business platform giving full
              control from market operator dashboard. App is giving analytics of
              businesses, investors and offers on the platform and allowing
              customization and whitelabeling by using theme editor and
              settings.
            </p>
          </div>
          <div className="tag-list">
            <div className="tag mr-2">WebApp</div>
            <div className="tag mr-2">Angular</div>
          </div>
        </div>
        <div className="card">
          <div>
            <h4 className="card-subtitle">WeOwn</h4>
            <h2 className="card-title">Console App</h2>
            <p>
              Administration application giving full overview and analytics of
              WeOwn platform. Investor, business and offer traction reports
              including all market operators on WeOwn platform.
            </p>
          </div>
          <div className="tag-list">
            <div className="tag mr-2">WebApp</div>
            <div className="tag mr-2">Angular</div>
          </div>
        </div>
        <div className="card">
          <div>
            <h4 className="card-subtitle">WeOwn</h4>
            <h2 className="card-title">Money Turtle</h2>
            <p>
              Money Turtle is a mobile app that modernises the fundraising
              process for your business or project. Asking your family or
              friends for funds can be unpleasant. We help you take the
              awkwardness away by legitimising the process. In a few simple
              steps, you can register, define your project, invite your network
              to invest and voila. Sit back and wait for your funds to arrive.
            </p>
          </div>
          <div className="tag-list">
            <div className="tag mr-2">PWA</div>
            <div className="tag mr-2">Angular</div>
            <div className="tag">Blockchain</div>
          </div>
        </div>
        <div className="card">
          <div>
            <h4 className="card-subtitle">WeOwn</h4>
            <h2 className="card-title">Investor App</h2>
            <p>
              Manage your assets on WeOwn platform using investor application.
            </p>
          </div>
          <div className="tag-list">
            <div className="tag mr-2">PWA</div>
            <div className="tag mr-2">Angular</div>
            <div className="tag">Blockchain</div>
          </div>
        </div>
        <div className="card">
          <div>
            <h4 className="card-subtitle">WeOwn</h4>
            <h2 className="card-title">Business platform</h2>
            <p>
              WeOwn is a self-service digital platform that helps SMEs to better
              manage their investors and stakeholder engagement. All you need to
              do is register your business and follow our wizard guide.
            </p>
          </div>
          <div className="tag-list">
            <div className="tag mr-2">WebApp</div>
            <div className="tag mr-2">Angular</div>
            <div className="tag">Blockchain</div>
          </div>
        </div>
        <div className="card">
          <div>
            <h4 className="card-subtitle">Findustrial</h4>
            <h2 className="card-title">Findustrial Pay-per-Use Platform</h2>
            <p>
              Independent and global IoT-based fintech platform onnecting
              industrial companies with the world of finance to fund industrial
              equipment based on IoT data.
            </p>
          </div>
          <div className="tag-list">
            <div className="tag mr-2">WebApp</div>
            <div className="tag mr-2">Angular</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
