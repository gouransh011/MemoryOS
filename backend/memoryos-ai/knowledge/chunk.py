from typing import Dict, Any
from pydantic import BaseModel, Field



class KnowledgeChunk(BaseModel):
    id: str

    document_id: str

    chunk_index: int

    text: str

    metadata: Dict[str, Any] = Field(default_factory=dict)