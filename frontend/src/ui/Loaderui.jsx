import "./Terminalloader.css"

export default function TerminalLoader() {
    return (
        <div className="flex justify-center items-center bg-linear-to-b  from-black via-purple-900/20 to-purple-950/90  min-h-screen">
            <div className="loader">
                <span><span></span><span></span><span></span><span></span></span>
                <div className="base">
                    <span></span>
                    <div className="face"></div>
                </div>
            </div>
            <div className="longfazers">
                <span></span><span></span><span></span><span></span>
            </div>

        </div>
    );
}
