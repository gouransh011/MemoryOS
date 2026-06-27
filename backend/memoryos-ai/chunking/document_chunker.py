from uuid import uuid4

from langchain_text_splitters import RecursiveCharacterTextSplitter

from chunking.base_chunker import BaseChunker
from knowledge.chunk import KnowledgeChunk
from knowledge.models import KnowledgeDocument
from app.config import CHUNK_SIZE, CHUNK_OVERLAP


class DocumentChunker(BaseChunker):

    def __init__(
        self,
        chunk_size: int = None,
        chunk_overlap: int = None,
    ):
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=CHUNK_SIZE,
            chunk_overlap=CHUNK_OVERLAP,
        )

    def chunk_document(
        self,
        document: KnowledgeDocument,
    ) -> list[KnowledgeChunk]:

        chunks = self.text_splitter.split_text(document.text)

        knowledge_chunks = []

        for index, chunk_text in enumerate(chunks):

            knowledge_chunks.append(
                KnowledgeChunk(
                    id=str(uuid4()),
                    document_id=document.id,
                    chunk_index=index,
                    text=chunk_text,
                    metadata = {
                        **document.metadata,
                        "title": document.title,
                        "file_type": document.file_type.value,
                        "content_type": document.content_type.value,
                        "chunk_index": index,
                    }
                )
            )

        return knowledge_chunks