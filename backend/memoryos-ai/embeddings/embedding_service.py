from knowledge.chunk import KnowledgeChunk
from knowledge.embedded_chunk import EmbeddedChunk

from embeddings.bge_embedder import BGEEmbedder


class EmbeddingService:

    def __init__(self):
        self.embedder = BGEEmbedder()

    def embed_text(
        self,
        text: str,
    ) -> list[float]:
        """
        Generate an embedding for any text.
        """
        return self.embedder.embed(text)

    def embed_chunks(
        self,
        chunks: list[KnowledgeChunk],
    ) -> list[EmbeddedChunk]:
        """
        Generate embeddings for a list of KnowledgeChunks.
        """

        embedded_chunks = []

        for chunk in chunks:

            embedding = self.embed_text(chunk.text)

            embedded_chunks.append(
                EmbeddedChunk(
                    chunk=chunk,
                    embedding=embedding,
                )
            )

        return embedded_chunks