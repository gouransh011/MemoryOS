from typing import Optional, Dict, Any
from pydantic import BaseModel
from knowledge.enums import FileType, ContentType


class KnowledgeDocument(BaseModel):
    id: str

    title: str

    file_type: FileType
    #pdf
    #docx
    #txt
    #mp3
    #wav
    #transcript

    content_type: ContentType = ContentType.OTHER
    # meeting
    # customer_call
    # pdf
    # contract
    # sop

    text: str

    organization: Optional[str] = None

    project: Optional[str] = None

    customer: Optional[str] = None

    author: Optional[str] = None

    created_at: Optional[str] = None

    metadata: Dict[str, Any] = {}