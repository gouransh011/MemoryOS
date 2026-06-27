from services.ingest_service import IngestService
from chunking.engine import ChunkingEngine
from embeddings.embedding_service import EmbeddingService
from vectorstore.vector_store_service import VectorStoreService


def main():

    ingest = IngestService()

    chunk_engine = ChunkingEngine()

    embedding_service = EmbeddingService()

    vector_store = VectorStoreService()

    document = ingest.ingest_document(
        "tests/fixtures/sprinting_session.pdf"
    )

    chunks = chunk_engine.chunk_document(document)

    embedded_chunks = embedding_service.embed_chunks(chunks)

    vector_store.add_chunks(embedded_chunks)

    print("Successfully stored chunks in ChromaDB!")


if __name__ == "__main__":
    main()