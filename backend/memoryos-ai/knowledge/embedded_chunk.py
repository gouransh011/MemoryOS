from pydantic import BaseModel

from knowledge.chunk import KnowledgeChunk


class EmbeddedChunk(BaseModel):
    chunk: KnowledgeChunk
    embedding: list[float]