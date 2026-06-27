from services.ingest_service import IngestService
from chunking.engine import ChunkingEngine
from embeddings.embedding_service import EmbeddingService


def main():

    ingest = IngestService()

    chunk_engine = ChunkingEngine()

    embedding_service = EmbeddingService()

    document = ingest.ingest_document(
        "tests/fixtures/sprinting_session.pdf"
    )

    chunks = chunk_engine.chunk_document(document)

    embedded = embedding_service.embed_chunks(chunks)

    print(f"Chunks: {len(embedded)}")

    print()

    print("Embedding dimension:")

    print(len(embedded[0].embedding))

    print()

    print("First five values:")

    print(embedded[0].embedding[:5])


if __name__ == "__main__":
    main()