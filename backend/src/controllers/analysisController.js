const aiServiceUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000';

export const analysisController = {
  upload: async (req, res, next) => {
    try {
      if (!req.file) return res.status(400).json({ success: false, message: 'Please select a PDF file', errorCode: 'FILE_REQUIRED' });
      const form = new FormData();
      form.append('file', new Blob([req.file.buffer], { type: req.file.mimetype }), req.file.originalname);
      const response = await fetch(`${aiServiceUrl}/ai/analyze`, { method: 'POST', body: form });
      const result = await response.json();
      if (!response.ok || !result.success) return res.status(502).json({ success: false, message: result.message || 'AI service could not process the PDF', errorCode: 'AI_ANALYSIS_FAILED' });
      return res.status(202).json({ success: true, data: { ...result.data, size: req.file.size }, message: 'PDF uploaded and analysis queued' });
    } catch (error) {
      error.status = 502;
      error.message = 'AI service is unavailable. Start the FastAPI service on port 8000.';
      return next(error);
    }
  }
};
