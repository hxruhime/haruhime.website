import Telegram  from "@/app/component/svg/social/Telegram";
import Github    from "@/app/component/svg/social/Github";

import TextTyper from "@/app/component/text/TextTyper";
import Image from "next/image";

export default function Home() {
  return (
      <div className={'flex h-screen'}>
        <div className={'flex flex-row justify-center m-auto'}>

          <div className={'bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center mr-2 ml-auto'}>
            <div className={'flex flex-col justify-center'}>
              <Github link={'https://github.com/hxruhime'}/>
              <Telegram link={'https://t.me/pharmacodynamics'}/>
            </div>
          </div>

          <div className={'p-6 max-w-sm mx-auto m-auto bg-gray-800 rounded-xl shadow-lg flex items-center space-x-4 s'}>
            <Image className={'rounded-full'} src={'https://avatars1.githubusercontent.com/u/38597755'} alt={'github'} width={64} height={64}/>
            <div>
              <h1 className={'text-2xl font-medium text-white'}><TextTyper/></h1>
              <h3 className={'text-slate-400'}>Backend Software Engineer</h3>
            </div>
          </div>

        </div>
      </div>
  )
}
