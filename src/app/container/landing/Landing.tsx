import { Avatar, Link } from "@nextui-org/react";

import Telegram         from "@component/svg/social/Telegram";
import Github           from "@component/svg/social/Github";

import TextTyper        from "@component/text/TextTyper";

const Landing = () => {
 return (
    <div>
      <div className="flex flex-row justify-center items-center space-x-8">

        {/* Column of socials */}
        <div className="bg-black rounded-xl shadow-lg flex flex-col justify-center p-4">
          <Github link={'https://github.com/hxruhime'} />
          <Telegram link={'https://t.me/hxruhime'} />
        </div>

        {/* Profile Card */}
        <div className="p-6 bg-black rounded-xl shadow-lg flex items-center space-x-4">
          <Avatar showFallback radius={'full'} size={'lg'} src={'https://avatars1.githubusercontent.com/u/38597755'} alt={'github'} />
          <div>
            <h1 className="font-large text-white"><TextTyper /></h1>
            <h3 className="text-slate-400">Software Engineer @ <Link isExternal href={'https://haruhime.holdings'}>Haruhime Holdings</Link></h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Landing;

// path: src/app/container/landing/Landing.tsx
