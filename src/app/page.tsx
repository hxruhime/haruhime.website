import { NextUIProvider } from "@nextui-org/react";

import Landing            from "@container/landing/Landing";

export default function Page() {
    return (
        <NextUIProvider>
            <div className="flex h-screen flex-col justify-center items-center">
                <Landing />
            </div>
        </NextUIProvider>
    );
}
