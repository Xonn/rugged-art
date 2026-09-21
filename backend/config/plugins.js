module.exports = ({ env }) => {
  const config = {
    seo: {
      enabled: true,
    },
  };

  if (env('AWS_ACCESS_KEY_ID')) {
    config.upload = {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env('AWS_ACCESS_KEY_ID'),
              secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
            },
            region: env('AWS_REGION', 'us-east-1'),
            endpoint: env('AWS_ENDPOINT_URL_S3'),
            forcePathStyle: true,
            params: {
              Bucket: env('AWS_BUCKET', 'assets'),
            },
          },
        },
      },
    };
  }

  return config;
};
