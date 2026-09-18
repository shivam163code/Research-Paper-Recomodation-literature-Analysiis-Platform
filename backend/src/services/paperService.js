import { paperRepository } from '../repositories/paperRepository.js';

export const paperService = {
  search: (params) => paperRepository.list(params),
  get: (id) => paperRepository.findById(id),
  saved: () => paperRepository.listSaved(),
  save: (id) => paperRepository.setSaved(id, true),
  remove: (id) => paperRepository.setSaved(id, false)
};
