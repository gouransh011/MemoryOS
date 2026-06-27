import chromadb

from knowledge.embedded_chunk import EmbeddedChunk
from knowledge.search_result import SearchResult

from vectorstore.base_vectorstore import BaseVectorStore


class ChromaStore(BaseVectorStore):

    def __init__(self):

        self.client = chromadb.PersistentClient(
            path="./chroma_db"
        )

        self.collection = self.client.get_or_create_collection(
            name="memoryos"
        )

    def add_chunks(
        self,
        chunks: list[EmbeddedChunk],
    ) -> None:

        ids = []
        documents = []
        embeddings = []
        metadatas = []

        for chunk in chunks:

            ids.append(chunk.chunk.id)

            documents.append(chunk.chunk.text)

            embeddings.append(chunk.embedding)

            metadatas.append(chunk.chunk.metadata)

        self.collection.add(
            ids=ids,
            documents=documents,
            embeddings=embeddings,
            metadatas=metadatas,
        )

    def similarity_search(
        self,
        embedding: list[float],
        top_k: int = 5,
    ) -> list[SearchResult]:

        results = self.collection.query(
            query_embeddings=[embedding],
            n_results=top_k,
        )

        search_results = []

        ids = results["ids"][0]
        documents = results["documents"][0]
        metadatas = results["metadatas"][0]
        distances = results["distances"][0]

        for chunk_id, text, metadata, distance in zip(
            ids,
            documents,
            metadatas,
            distances,
        ):
            search_results.append(
                SearchResult(
                    chunk_id=chunk_id,
                    text=text,
                    metadata=metadata,
                    score=distance,
                )
            )

        return search_results