from abc import ABC, abstractmethod

from knowledge.embedded_chunk import EmbeddedChunk
from knowledge.search_result import SearchResult


class BaseVectorStore(ABC):

    @abstractmethod
    def add_chunks(
        self,
        chunks: list[EmbeddedChunk],
    ) -> None:
        """
        Store embedded chunks.
        """
        pass

    @abstractmethod
    def similarity_search(
        self,
        embedding: list[float],
        top_k: int = 5,
    ) -> list[SearchResult]:
        """
        Search for similar chunks.
        """
        pass