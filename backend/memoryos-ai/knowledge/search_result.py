from typing import Any

from pydantic import BaseModel, Field


class SearchResult(BaseModel):
    chunk_id: str
    text: str
    metadata: dict[str, Any] = Field(default_factory=dict)
    score: float