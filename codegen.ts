import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      [`https://${process.env.NEXT_PUBLIC_SWELL_STORE_ID}.swell.store/graphql`]:
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY,
          },
        },
    },
  ],

  documents: ["src/**/*.tsx"],
  generates: {
    "path/to/file.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: true,
      },
    },
  },
};
export default config;
