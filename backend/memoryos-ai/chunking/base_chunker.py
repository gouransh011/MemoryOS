from abc import ABC, abstractmethod

from knowledge.models import KnowledgeDocument
from knowledge.chunk import KnowledgeChunk


class BaseChunker(ABC):

    @abstractmethod
    def chunk_document(
        self,
        document: KnowledgeDocument,
    ) -> list[KnowledgeChunk]:
        """
        Convert a KnowledgeDocument into KnowledgeChunks.
        """
        pass