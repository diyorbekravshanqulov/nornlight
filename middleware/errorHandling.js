// middleware/errorHandling.js
export default function ({ error }) {
  // Trigger a 404 error
  error({ statusCode: 404, message: "Page not found" });
}
