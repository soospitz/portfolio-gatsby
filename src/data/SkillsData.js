import React from "react"
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiGraphql } from "react-icons/si"
import { FaSass } from "react-icons/fa"

export const SkillsData = [
  {
    icon: (
      <SiJavascript
        css={`
          color: #f2a82e;
        `}
      />
    ),
    title: "JavaScript",
  },
  {
    icon: (
      <SiReact
        css={`
          color: #61dbfb;
        `}
      />
    ),
    title: "React",
  },
  {
    icon: (
      <SiHtml5
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "HTML",
  },
  {
    icon: (
      <SiCss3
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "CSS",
  },
  {
    icon: (
      <FaSass
        css={`
          color: #cc6699;
        `}
      />
    ),
    title: "SASS",
  },
  {
    icon: (
      <SiGraphql
        css={`
          color: #e535ab;
        `}
      />
    ),
    title: "GraphQL"
  },
]
