# Deployment

For local development, run `npm install` and `npm run dev`. The React client expects the API at `http://localhost:4000` unless `VITE_API_URL` is set.

The included Compose file starts MongoDB and the API. Before using it in a shared environment, add a production `.env`, replace the development repository with a Mongo repository implementation, and place the frontend behind a static hosting or reverse-proxy layer.

The FastAPI service is deployed separately from `ai-service` with Uvicorn. Keep model downloads and uploaded PDFs outside the application container, and use a queue for long-running analysis jobs.
