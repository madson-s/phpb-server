module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '151f3efb45bcda8ec09e10c1611db904'),
  },
});
