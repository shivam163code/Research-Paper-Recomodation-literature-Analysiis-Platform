from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel

app = FastAPI(title='Litera AI Service', version='0.1.0')

class TextRequest(BaseModel):
    text: str

@app.get('/health')
def health():
    return {'success': True, 'data': {'service': 'litera-ai', 'status': 'ok'}, 'message': 'Healthy'}

@app.post('/ai/analyze')
async def analyze(file: UploadFile = File(...)):
    if file.content_type != 'application/pdf':
        return {'success': False, 'message': 'Only PDF files are supported', 'errorCode': 'INVALID_FILE_TYPE'}
    return {'success': True, 'data': {'status': 'queued', 'filename': file.filename, 'summary': 'Analysis will be populated by the NLP pipeline.'}, 'message': 'Analysis queued'}

@app.post('/ai/embedding')
def embedding(request: TextRequest):
    return {'success': True, 'data': {'dimensions': 0, 'status': 'adapter-ready', 'textLength': len(request.text)}, 'message': 'Embedding adapter ready'}

@app.post('/ai/research-gap')
def research_gap(request: TextRequest):
    return {'success': True, 'data': {'status': 'adapter-ready', 'suggestions': []}, 'message': 'Gap analysis adapter ready'}
