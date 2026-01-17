import { memo } from "react"
import { AnimatePresence, motion } from "motion/react"

/* simple cn replacement */
function cn(...classes) {
    return classes.filter(Boolean).join(" ")
}

const staggerTimings = {
    text: 0.06,
    word: 0.05,
    character: 0.03,
    line: 0.06,
}

const defaultContainerVariants = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
}

const defaultItemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
}

const animations = {
    fadeIn: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
        },
    },
    blurInUp: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
            show: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: { duration: 0.4 },
            },
            exit: {
                opacity: 0,
                filter: "blur(10px)",
                y: 20,
                transition: { duration: 0.3 },
            },
        },
    },
}

function TextAnimateBase({
    children,
    className,
    segmentClassName,
    delay = 0,
    duration = 0.4,
    as: Component = "p",
    by = "word",
    animation = "fadeIn",
    startOnView = true,
    once = true,
    accessible = true,
    ...props
}) {
    const MotionComponent = motion.create(Component)

    let segments = []
    if (by === "word") segments = children.split(/(\s+)/)
    else if (by === "character") segments = children.split("")
    else if (by === "line") segments = children.split("\n")
    else segments = [children]

    const preset = animations[animation] || {
        container: defaultContainerVariants,
        item: defaultItemVariants,
    }

    return (
        <AnimatePresence mode="popLayout">
            <MotionComponent
                variants={{
                    ...preset.container,
                    show: {
                        ...preset.container.show,
                        transition: {
                            delayChildren: delay,
                            staggerChildren: duration / segments.length,
                        },
                    },
                }}
                initial="hidden"
                whileInView={startOnView ? "show" : undefined}
                animate={!startOnView ? "show" : undefined}
                exit="exit"
                viewport={{ once }}
                className={cn("whitespace-pre-wrap", className)}
                aria-label={accessible ? children : undefined}
                {...props}
            >
                {accessible && (
                    <span style={{ position: "absolute", opacity: 0 }}>
                        {children}
                    </span>
                )}

                {segments.map((segment, i) => (
                    <motion.span
                        key={i}
                        variants={preset.item}
                        custom={i * staggerTimings[by]}
                        className={cn(
                            by === "line" ? "block" : "inline-block",
                            segmentClassName
                        )}
                        aria-hidden={accessible}
                    >
                        {segment}
                    </motion.span>
                ))}
            </MotionComponent>
        </AnimatePresence>
    )
}

export const TextAnimate = memo(TextAnimateBase)
