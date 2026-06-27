from knowledge.chunk import KnowledgeChunk
from knowledge.models import KnowledgeDocument

from chunking.registry import ChunkRegistry


class ChunkingEngine:

    def __init__(self):
        self.registry = ChunkRegistry()

    def chunk_document(
        self,
        document: KnowledgeDocument,
    ) -> list[KnowledgeChunk]:

        chunker = self.registry.get_chunker(
            document.content_type
        )

        return chunker.chunk_document(document)