import { getTranslation } from './utils/getTranslation';
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';

export default {
  register(app) {
    // app.addMenuLink({
    //   to: `plugins/${PluginIcon}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${PLUGIN_ID}.plugin.name`,
    //     defaultMessage: PLUGIN_ID,
    //   },
    //   Component: async () => {
    //     const { App } = await import('./pages/App');

    //     return App;
    //   },
    // });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  // async registerTrads({ locales }) {
  //   return Promise.all(
  //     locales.map(async (locale) => {
  //       try {
  //         const { default: data } = await import(`./translations/${locale}.json`);

  //         return { data, locale };
  //       } catch {
  //         return { data: {}, locale };
  //       }
  //     })
  //   );
  // },

  bootstrap(app) {
      app.registerHook('plugin/preview-button/before-build-url', ({ data, draft, published }) => {
        let client_url;
        const locale = data.locale
        switch (locale) {
          case 'de-DE':
          client_url = `${process.env.STRAPI_ADMIN_CLIENT_DE_URL}`;  
          break;
          case 'de-AT':
          client_url = `${process.env.STRAPI_ADMIN_CLIENT_AT_URL}`;
          break;  
          case 'de-CH':
          client_url = `${process.env.STRAPI_ADMIN_CLIENT_CH_URL}`;
          break;
          default:
          break;
        }

        const slug = data.slug

        switch (slug) {
          case 'de_DE':
          client_url = `${process.env.STRAPI_ADMIN_CLIENT_DE_URL}`;
          break;  
          case 'de_AT':
          client_url = `${process.env.STRAPI_ADMIN_CLIENT_AT_URL}`;
          break;  
          case 'de_CH':
          client_url = `${process.env.STRAPI_ADMIN_CLIENT_CH_URL}`;
          break;  
          default:
          break;
        }

        return {
          published:{
            ...published,
            url: published.url.replace('{host}', client_url),
          },
          draft:{
            ...draft,
            url: draft.url.replace('{host}', client_url),
          },
        };
      });
    },
};
