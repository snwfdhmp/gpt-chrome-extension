import React from "react"

export const Credits = ({ style }) => {
  return (
    <span
      style={{
        color: "#888",
        ...style,
      }}
    >
      by{" "}
      <a href="https://github.com/snwfdhmp" style={{ color: "#444" }}>
        snwfdhmp
      </a>
      , free and{" "}
      <a
        href="https://github.com/snwfdhmp/gpt-chrome-extension"
        style={{ color: "inherit" }}
      >
        open source
      </a>
    </span>
  )
}
