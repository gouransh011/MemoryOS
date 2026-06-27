from knowledge.embedded_chunk import EmbeddedChunk
from knowledge.search_result import SearchResult

from vectorstore.chroma_store import ChromaStore


class VectorStoreService:

    def __init__(self):
        self.store = ChromaStore()

    def add_chunks(
        self,
        chunks: list[EmbeddedChunk],
    ) -> None:
        self.store.add_chunks(chunks)

    def similarity_search(
        self,
        embedding: list[float],
        top_k: int = 5,
    ) -> list[SearchResult]:

        return self.store.similarity_search(
            embedding,
            top_k,
        )