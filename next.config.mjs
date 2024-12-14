/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
  })

export default withMDX(nextConfig)