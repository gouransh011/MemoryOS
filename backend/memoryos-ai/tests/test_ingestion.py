from services.ingest_service import IngestService


def main():
    service = IngestService()

    document = service.ingest_document(
        "tests/fixtures/sprinting_session.pdf"
    )

    print("\n===== DOCUMENT =====")
    print(f"ID: {document.id}")
    print(f"Title: {document.title}")
    print(f"File Type: {document.file_type}")
    print(f"Content Type: {document.content_type}")
    print(f"Metadata: {document.metadata}")

    print("\n===== TEXT PREVIEW =====")
    print(document.text[:500])


if __name__ == "__main__":
    main()