import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import {useRouter} from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Cue AI</span>,
  project: {
    link: 'https://github.com/cue-ai/docs',
  },
  docsRepositoryBase: 'https://github.com/cue-ai/docs',
  footer: {
    text: 'Cue AI',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        description: 'Cue AI Documentation',
        titleTemplate: '%s – Cue AI'
      }
    }
  }
}

export default config
