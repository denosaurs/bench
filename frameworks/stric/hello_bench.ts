import { App } from '@stricjs/core';

// Cache the text
const text = 'Hello, Bench!';

// Create an app and set port and stuff
const app = new App().use(() => new Response(text));
app.port = 8000;

// Serve
export default app;
