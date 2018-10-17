const corsConfig = {
  origin: 'http://localhost:3000',
  allowedHeaders: [
    'Cookie',
    'x-access-token',
    'Content-Type',
    'X-Requested-With',
    'Access-Control-Allow-Origin',
    'Accept',
    'Set-Cookie',
    'Connection',
    '*',
  ],
  exposedHeaders: [
    'Cookie',
    'x-access-token',
    'Content-Type',
    'X-Requested-With',
    'Access-Control-Allow-Origin',
    'Accept',
    'Set-Cookie',
    'Connection',
    '*',
  ],
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'INDEX', 'OPTIONS'],
  credentials: true,
  maxAge: 3600,
};

export const corsOptionsDelegate = (req, callback) => {
  const origin = req.header('Origin');
  callback(null, {
    ...corsConfig,
    origin,
  });
};

export default corsConfig;
