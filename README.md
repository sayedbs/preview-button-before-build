# preview-button-before-build
Plugin for Strapi 5 preview-button extension to support multiple domain in author Draft preview and publish


### Enable plugin in plugins.js
```
'preview-button-before-build': {
      enabled: true
  },
```

### .env update
```
# new add after extend preview plugin
STRAPI_ADMIN_CLIENT_DE_URL=http://localhost:3000
STRAPI_ADMIN_CLIENT_AT_URL=http://localhost:3001
STRAPI_ADMIN_CLIENT_CH_URL=http://localhost:3002
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001,http://localhost:3002
```