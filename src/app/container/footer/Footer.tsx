const Github = () => {
    return (
        <a href="https://github.com/hxruhime/haruhime.website" target={"_blank"}>
            <svg className="h-5 w-5" viewBox="0 0 16 16"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.69-.01-1.35-2.01.44-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.86 3.75-3.64 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.54 16
11.54 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
        </a>
    )
}

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer absolute mb-3 bottom-0.5 w-full text-center">
            <div
                className="text-slate-400">
                <Github/> <p>&copy; haruhime.website {year}</p>
            </div>
        </footer>
    );
};

export default Footer;

// path: src/app/container/footer/Footer.tsx