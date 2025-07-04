# preview-button-before-build Addon for "strapi-plugin-preview-button"
Plugin for Strapi 5 preview-button extension to support multiple domain in author Draft preview and publish

Pre-requirement
- Strapi 5.x
- strapi-plugin-preview-button required plugin [strapi-plugin-preview-button](https://www.npmjs.com/package/strapi-plugin-preview-button/v/0.2.9)


### Enable plugin in plugins.js
```

  'preview-button-before-build': {
      enabled: true
  },

  'preview-button': {
      enabled: true,
      config: {
        contentTypes: [
          {
            uid: 'api::content-type',
            draft: {
              url: `{host}/api/preview?slug={slug}&contentType=login-page&secret=${process.env.PREVIEW_SECRET}&status=draft`,
            },
            published: {
              url: `{host}/api/preview?slug={slug}&contentType=login-page&secret=${process.env.PREVIEW_SECRET}&status=published`
            }
          },
          {
            ....
          }
          ...
        ]
      }
  }

```

### .env update
```
# new add after extend preview plugin
STRAPI_ADMIN_CLIENT_DE_URL=http://localhost:3000
STRAPI_ADMIN_CLIENT_AT_URL=http://localhost:3001
STRAPI_ADMIN_CLIENT_CH_URL=http://localhost:3002
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001,http://localhost:3002
```