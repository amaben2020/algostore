import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      [`${process.env.SWELL_PUBLIC_URL}`]: {
        headers: {
          Authorization: `${process.env.NEXT_PUBLIC_SWELL_KEY}`,
        },
      },
    },
  ],

  generates: {
    "./src/generated/": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      documents: ["src/**/*.ts", "src/**/*.graphql"],
      config: {
        rawRequest: true,
      },
    },
  },
};
export default config;
