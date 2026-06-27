from knowledge.search_result import SearchResult

from retrieval.retriever import Retriever


class RetrievalService:

    def __init__(self):
        self.retriever = Retriever()

    def retrieve(
        self,
        query: str,
        top_k: int = 5,
    ) -> list[SearchResult]:

        return self.retriever.retrieve(
            query,
            top_k,
        )