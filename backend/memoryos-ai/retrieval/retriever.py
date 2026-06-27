from knowledge.search_result import SearchResult

from embeddings.embedding_service import EmbeddingService
from vectorstore.vector_store_service import VectorStoreService


class Retriever:

    def __init__(self):
        self.embedding_service = EmbeddingService()
        self.vector_store = VectorStoreService()

    def retrieve(
        self,
        query: str,
        top_k: int = 5,
    ) -> list[SearchResult]:
        """
        Retrieve the most relevant chunks for a query.
        """

        query_embedding = self.embedding_service.embed_text(query)

        return self.vector_store.similarity_search(
            query_embedding,
            top_k,
        )