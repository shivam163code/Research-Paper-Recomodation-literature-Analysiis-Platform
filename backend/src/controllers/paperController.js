import { paperService } from '../services/paperService.js';

const ok = (res, data, message = 'Request successful') => res.json({ success: true, data, message });

export const paperController = {
  search: async (req, res, next) => { try { return ok(res, await paperService.search(req.query)); } catch (error) { return next(error); } },
  get: async (req, res, next) => { try { const paper = await paperService.get(req.params.id); if (!paper) return res.status(404).json({ success: false, message: 'Paper not found', errorCode: 'PAPER_NOT_FOUND' }); return ok(res, paper); } catch (error) { return next(error); } },
  saved: async (_req, res, next) => { try { return ok(res, await paperService.saved()); } catch (error) { return next(error); } },
  save: async (req, res, next) => { try { const paper = await paperService.save(req.params.paperId); return ok(res, paper, 'Paper saved'); } catch (error) { return next(error); } },
  remove: async (req, res, next) => { try { const paper = await paperService.remove(req.params.paperId); return ok(res, paper, 'Paper removed'); } catch (error) { return next(error); } }
};
