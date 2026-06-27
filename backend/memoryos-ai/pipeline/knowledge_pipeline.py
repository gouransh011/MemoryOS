from services.ingest_service import IngestService
from chunking.engine import ChunkingEngine
from embeddings.embedding_service import EmbeddingService
from retrieval.retrieval_service import RetrievalService
from vectorstore.vector_store_service import VectorStoreService
from knowledge.models import KnowledgeDocument

class KnowledgePipeline:

    def __init__(self):

        self.ingest_service = IngestService()

        self.chunking_engine = ChunkingEngine()

        self.embedding_service = EmbeddingService()

        self.vector_store = VectorStoreService()

        self.retrieval_service = RetrievalService()

    def ingest_document(
        self,
        file_path: str,
    ) -> KnowledgeDocument:

        document = self.ingest_service.ingest_document(
            file_path
        )

        chunks = self.chunking_engine.chunk_document(
            document
        )

        embedded_chunks = self.embedding_service.embed_chunks(
            chunks
        )

        self.vector_store.add_chunks(
            embedded_chunks
        )

        return document

    def ask(
        self,
        question: str,
        top_k: int = 5,
    ):
        return self.retrieval_service.retrieve(
            question,
            top_k,
        )