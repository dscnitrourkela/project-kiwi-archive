module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index.html',
        permanent: true
      }
    ];
  },
  root: '/',
  distDir: 'nextjs',
  env: {
    FIREBASE_PROJECT_ID: 'bizvoip-9f673'
  },
  experimental: {
    sprFlushToDisk: false
  }
};
