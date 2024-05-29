import { Card, CardBody, Image, Link, CardFooter } from "@nextui-org/react";

import Telegram                                    from "@component/svg/social/Telegram";
import Github                                      from "@component/svg/social/Github";
import Email                                       from "@component/svg/social/Email";

import TextTyper                                   from "@component/text/TextTyper";

const Landing = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
            <Card isBlurred shadow="lg" className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-xl max-w-lg p-6 transform transition-transform hover:scale-105">
                <CardBody>
                    <div className="flex flex-row items-center space-x-6">
                        <Image
                            src="https://avatars1.githubusercontent.com/u/38597755"
                            alt="avatar"
                            width={128}
                            height={128}
                            className="rounded-full border-4 border-gray-700"
                        />
                        <div>
                            <h1 className="text-white text-xl font-bold">
                                <TextTyper />
                            </h1>
                            <h3 className="text-slate-400 mt-2">
                                Software Engineer @{' '}
                                <Link isExternal href="https://haruhime.holdings" className="hover:underline text-slate-300">
                                    Haruhime Holdings
                                </Link>
                            </h3>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-around">
                    <Github link="https://github.com/hxruhime" />
                    <Telegram link="https://t.me/hxruhime" />
                    <Email link="mailto:david@haruhime.holdings" />
                </CardFooter>
            </Card>
        </div>
    );
};

export default Landing;

// path: src/app/container/landing/Landing.tsx
