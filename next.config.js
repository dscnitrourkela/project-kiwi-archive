const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ });
module.exports = withMDX({
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true
      }
    ];
  },
  root: '/',
  experimental: {
    sprFlushToDisk: false
  },
  pageExtensions: ['js', 'jsx', 'mdx']
});
