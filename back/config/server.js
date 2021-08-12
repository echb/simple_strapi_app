module.exports = ({ env }) => ({
  host: env('HOST', '192.168.1.123'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f40ddc97e63e6cd4536e17f98721edbb'),
    },
  },
});
