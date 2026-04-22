import type { Core } from '@strapi/strapi';

const config: Core.Config.Api = {
  rest: {
    defaultLimit: 500,
    maxLimit: 5000,    
    withCount: true,
  },
};

export default config;