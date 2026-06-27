from knowledge.chunk import KnowledgeChunk
from knowledge.embedded_chunk import EmbeddedChunk

from embeddings.bge_embedder import BGEEmbedder


class EmbeddingService:

    def __init__(self):
        self.embedder = BGEEmbedder()

    def embed_chunks(
        self,
        chunks: list[KnowledgeChunk],
    ) -> list[EmbeddedChunk]:

        embedded_chunks = []

        for chunk in chunks:

            vector = self.embedder.embed(chunk.text)

            embedded_chunks.append(
                EmbeddedChunk(
                    chunk=chunk,
                    embedding=vector,
                )
            )

        return embedded_chunks