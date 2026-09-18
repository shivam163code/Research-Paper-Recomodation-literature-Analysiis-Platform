# Litera

Litera is a full-stack research workspace for discovering, understanding, and organizing academic literature.

## Current vertical slice

- React/Vite research workspace with dashboard, search, recommendations, library, history, analysis, comparison, trends, and settings views.
- Express REST API under `/api/v1` with development fallback data and clean service/controller boundaries.
- FastAPI AI-service boundary under `/ai` ready for PDF extraction, summarization, embeddings, and gap analysis.
- Responsive layout with light and dark themes, keyboard-friendly navigation, loading/error/empty states, and reusable paper cards.

## Run locally

```bash
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and the API on `http://localhost:4000`.

To run the AI service:

```bash
cd ai-service
python -m venv .venv
.venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Copy `.env.example` files when connecting MongoDB, external paper providers, or an AI model. Development mode intentionally uses a small local dataset until those services are configured.

## Architecture

`frontend -> Express API -> services/repositories -> MongoDB or provider adapters`

`Express API -> FastAPI AI service -> PDF/NLP/embedding implementations`

See `docs/architecture.md` and `docs/api-documentation.md` for the extension points.
