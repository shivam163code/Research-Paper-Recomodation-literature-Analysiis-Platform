import { papers } from '../data/papers.js';

export const paperRepository = {
  async list({ query = '' } = {}) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return papers;
    return papers.filter((paper) => `${paper.title} ${paper.abstract} ${paper.authors.join(' ')} ${paper.tags.join(' ')}`.toLowerCase().includes(normalized));
  },
  async findById(id) { return papers.find((paper) => paper.id === id) || null; },
  async listSaved() { return papers.filter((paper) => paper.saved); },
  async setSaved(id, saved) { const paper = await this.findById(id); if (paper) paper.saved = saved; return paper; }
};
