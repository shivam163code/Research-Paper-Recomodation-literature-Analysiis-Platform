# Database design

MongoDB is the primary store. Core collections are `users`, `papers`, `analyses`, `bookmarks`, `searchHistory`, and `recommendations`.

Paper deduplication should prioritize DOI, provider IDs, normalized title, and author/year. Embeddings are stored by reference so model or vector-store changes do not require rewriting paper metadata.
