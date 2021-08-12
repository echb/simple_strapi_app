module.exports = ({ env }) => ({
  settings: {
    'upload-plugin-cache': {
      enabled: true,
      maxAge: 86400000,
      dynamic: true,
      lruCache: {
        max: 1000
      }
    }
  }
});