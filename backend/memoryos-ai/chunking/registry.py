from knowledge.enums import ContentType

from chunking.base_chunker import BaseChunker
from chunking.document_chunker import DocumentChunker


class ChunkRegistry:

    def __init__(self):
        self._chunkers = {
            ContentType.OTHER: DocumentChunker(),
            ContentType.REQUIREMENT: DocumentChunker(),
            ContentType.CONTRACT: DocumentChunker(),
            ContentType.SOP: DocumentChunker(),
            ContentType.DESIGN_DOC: DocumentChunker(),
            ContentType.TECHNICAL_DOC: DocumentChunker(),
        }

    def get_chunker(
        self,
        content_type: ContentType,
    ) -> BaseChunker:

        chunker = self._chunkers.get(content_type)

        if chunker is None:
            raise ValueError(
                f"No chunker registered for {content_type}"
            )

        return chunker