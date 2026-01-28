import React, { useRef } from "react"
import { AnimatedBeam } from "../ui/Avatar"
import { Circle } from "./Circle"
import Reactimg from "../../public/bit-react.png"

export default function BeamManualDemo() {
    const containerRef = useRef(null)

    const jsRef = useRef(null)
    const reactRef = useRef(null)
    const nextRef = useRef(null)
    const expressRef = useRef(null)
    const mongoRef = useRef(null)
    const reduxRef = useRef(null)
    const zustandRef = useRef(null)
    const tailwindRef = useRef(null)


    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                width: "100%",
                height: "500px",
                background: "#0b0b0b",
                overflow: "hidden",
            }}
        >
            {/* CENTER */}
            <Circle
                imgSrc={"/js-svgrepo-com (1).svg"}
                label="JavaScript"
                circleRef={jsRef}
                size={80}   // 👈 new prop
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 100, // 👑 king node
                }}
            />


            <Circle
                imgSrc="/reactjs-svgrepo-com.svg"
                label="React"
                circleRef={reactRef}
                style={{ top: "20%", left: "15%" }}
            />
            <Circle
                imgSrc="/bit-react.png"
                label="Redux"
                circleRef={reduxRef}
                style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)" }}
            />
            <Circle
                imgSrc="/bit-react.png"
                label="Redux"
                circleRef={reduxRef}
                style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)" }}
            />
            <Circle
                imgSrc="https://cdn.brandfetch.io/id2alue-rx/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1714556222178"
                label="Next.js"
                circleRef={nextRef}
                style={{ bottom: "20%", left: "15%" }}
            />

            <Circle
                imgSrc="/Node.js.png"
                label="Express"
                circleRef={expressRef}
                style={{ top: "20%", right: "15%" }}
            />

            <Circle
                imgSrc="/MongoDB.png"
                label="MongoDB"
                circleRef={mongoRef}
                style={{ bottom: "20%", right: "15%" }}
            />


            <Circle
                imgSrc="/tailwind-svgrepo-com.svg"
                label="Tailwind"
                circleRef={zustandRef}
                style={{ top: "50%", left: "5%" }}
            />

            <Circle
                imgSrc="../../public/chat-gpt (1).png"
                label="chat gpt"
                circleRef={tailwindRef}
                style={{ top: "50%", right: "5%" }}
            />
            <Circle
                imgSrc="/tailwind-svgrepo-com.svg"
                label="Tailwind"
                circleRef={zustandRef}
                style={{ top: "50%", left: "5%" }}
            />




            {/* BEAMS (USING YOUR COMPONENT) */}
            <AnimatedBeam containerRef={containerRef} fromRef={reactRef} toRef={jsRef} curvature={60} />

            <AnimatedBeam containerRef={containerRef} fromRef={nextRef} toRef={jsRef} curvature={-60} />

            <AnimatedBeam containerRef={containerRef} fromRef={expressRef} toRef={jsRef} curvature={60} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={mongoRef} toRef={jsRef} curvature={-60} reverse />

            <AnimatedBeam containerRef={containerRef} fromRef={reduxRef} toRef={jsRef} />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={zustandRef}
                toRef={jsRef}
                curvature={100}
            />

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={tailwindRef}
                toRef={jsRef}
                curvature={-100}
                reverse
            />

        </div>
    )
}
