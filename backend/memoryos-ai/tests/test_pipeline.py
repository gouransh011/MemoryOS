from pipeline.knowledge_pipeline import KnowledgePipeline


def main():

    pipeline = KnowledgePipeline()

    pipeline.ingest_document(
        "tests/fixtures/sprinting_session.pdf"
    )

    print("Document indexed successfully!\n")

    results = pipeline.ask(
        "Who is responsible for backend authentication?"
    )

    print("=" * 60)

    for result in results:

        print(f"Score: {result.score:.4f}")

        print()

        print(result.text)

        print("=" * 60)


if __name__ == "__main__":
    main()