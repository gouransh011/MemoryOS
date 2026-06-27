from services.ingest_service import IngestService
from chunking.engine import ChunkingEngine
from embeddings.embedding_service import EmbeddingService
from vectorstore.vector_store_service import VectorStoreService
from retrieval.retrieval_service import RetrievalService


def main():

    ingest = IngestService()

    chunk_engine = ChunkingEngine()

    embedding_service = EmbeddingService()

    vector_store = VectorStoreService()

    retrieval = RetrievalService()

    # Load PDF
    document = ingest.ingest_document(
        "tests/fixtures/sprinting_session.pdf"
    )

    # Chunk it
    chunks = chunk_engine.chunk_document(document)

    # Embed
    embedded_chunks = embedding_service.embed_chunks(chunks)

    # Store
    vector_store.add_chunks(embedded_chunks)

    print("Document stored.\n")

    # Ask Question
    query = "Who is responsible for backend authentication?"

    results = retrieval.retrieve(query)

    print("=" * 70)
    print(f"Question: {query}")
    print("=" * 70)

    for result in results:

        print()

        print(f"Score: {result.score:.4f}")

        print(result.text)

if __name__ == "__main__":
    main()