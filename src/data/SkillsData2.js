import React from "react"
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobexd,
  SiAdobeaftereffects,
} from "react-icons/si"
import { FaSketch } from "react-icons/fa"

export const SkillsData2 = [
  {
    icon: (
      <SiAdobeillustrator
        css={`
          color: #ff7c00;
        `}
      />
    ),
    title: "Illustrator",
  },
  {
    icon: (
      <SiAdobeindesign
        css={`
          color: #ff3f94;
        `}
      />
    ),
    title: "InDesign",
  },
  {
    icon: (
      <SiAdobephotoshop
        css={`
          color: #00c8ff;
        `}
      />
    ),
    title: "Photoshop",
  },
  {
    icon: (
      <SiAdobexd
        css={`
          color: #f524b7;
        `}
      />
    ),
    title: "XD",
  },
  {
    icon: (
      <SiAdobeaftereffects
        css={`
          color: #ea77ff;
        `}
      />
    ),
    title: "XD",
  },
  {
    icon: (
      <FaSketch
        css={`
          color: #efdf48;
        `}
      />
    ),
    title: "Sketch",
  },
]
