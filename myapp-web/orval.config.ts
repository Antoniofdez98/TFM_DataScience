import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: './openapi.json',
    output: {
      target: 'src/api/generated.ts',
      client: 'react-query',
      override: {
        mutator: {
          path: 'src/api/fetcher.ts',
          name: 'customFetcher',
        },
      },
    },
  },
});
