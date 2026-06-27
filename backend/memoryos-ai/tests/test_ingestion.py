from services.ingest_service import IngestService
from chunking.engine import ChunkingEngine


def main():

    ingest = IngestService()

    engine = ChunkingEngine()

    document = ingest.ingest_document(
        "tests/fixtures/sprinting_session.pdf"
    )

    chunks = engine.chunk_document(document)

    print(f"Generated {len(chunks)} chunks\n")

    for chunk in chunks:
        print("=" * 60)
        print(chunk.chunk_index)
        print(chunk.text[:200])
        print()

if __name__ == "__main__":
    main()