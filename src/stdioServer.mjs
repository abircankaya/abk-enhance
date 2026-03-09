import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createPromptGateServer } from "./mcpServer.mjs";
import { createPromptService } from "./serviceFactory.mjs";

export async function startStdioServer(options = {}) {
  const service = options.service || createPromptService();
  const server = createPromptGateServer({ service });
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
