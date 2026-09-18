# Architecture

Litera uses a modular three-service architecture.

- `frontend`: React presentation layer, route composition, API client, and UI state.
- `backend`: Express HTTP layer. Controllers translate requests, services own use cases, repositories own persistence, and integrations own external providers.
- `ai-service`: FastAPI boundary for document extraction, NLP analysis, embeddings, recommendations, and research-gap workflows.

The development fallback repository mirrors the MongoDB repository contract, so persistence can be introduced without changing controllers or React code.
