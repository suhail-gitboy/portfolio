import React from "react"

export function Circle({ imgSrc, label, circleRef, style = {} }) {
    return (
        <div
            ref={circleRef}
            style={{
                position: "absolute",
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "#111",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                ...style,
            }}
        >
            {imgSrc && (
                <img
                    src={imgSrc}
                    alt={label}
                    style={{
                        width: 40,
                        height: 40,
                        objectFit: "contain",
                        filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))",
                    }}
                />
            )}
            <span style={{ fontSize: 12, color: "#fff" }}>{label}</span>
        </div>
    )
}
