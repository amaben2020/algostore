import { GraphQLClient } from "graphql-request";

export class SwellService {
  private client: GraphQLClient;
  constructor() {
    this.client = new GraphQLClient("https://algomachine.swell.store/graphql", {
      headers: {
        "x-session": "xQmlGe4W0WAJpikoLpK8xmtKCEzE4vKd",
      },
    });
  }

  public async getSwellClient(query: string) {
    try {
      const data = await this.client.request(query);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
