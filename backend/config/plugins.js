module.exports = ({ env }) => {
  // Configuration de base (commune à tous les environnements)
  const config = {
    seo: {
      enabled: true,
    },
  };

  // Si la clé Neon est présente (en production sur Render), on active le stockage Neon S3
  if (env('NEON_STORAGE_ACCESS_KEY')) {
    config.upload = {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env('NEON_STORAGE_ACCESS_KEY'),
              secretAccessKey: env('NEON_STORAGE_SECRET_KEY'),
            },
            region: env('NEON_STORAGE_REGION', 'us-east-1'),
            endpoint: env('NEON_STORAGE_ENDPOINT'),
            forcePathStyle: true, // Requis par Neon
            params: {
              Bucket: env('NEON_STORAGE_BUCKET', 'assets'),
            },
          },
        },
      },
    };
  }

  return config;
};
