"use client";

import { useMemo } from "react";
import { Cloud } from "react-icon-cloud";

export const cloudProps = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageMode: "image",
        imageScale: 2,
        txtOpt: false,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
    },
};

export const renderCustomIcon = (slug) => {
    const label = slug
        .replace(/dot/g, ".")
        .replace(/([a-z])([A-Z])/g, "$1 $2");

    return (
        <a
            key={slug}
            title={label}
            href="#skills"
            onClick={(e) => e.preventDefault()}
        >
            <img
                height="42"
                width="42"
                alt={label}
                src={`https://cdn.simpleicons.org/${slug}`}
            />
        </a>
    );
};

export default function IconCloud({ iconSlugs }) {
    const renderedIcons = useMemo(() => {
        return iconSlugs.map(renderCustomIcon);
    }, [iconSlugs]);

    return (
        // @ts-ignore
        <Cloud {...cloudProps}>
            <>{renderedIcons}</>
        </Cloud>
    );
}
