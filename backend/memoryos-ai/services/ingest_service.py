from knowledge.models import KnowledgeDocument
from loaders.registry import LoaderRegistry


class IngestService:

    def __init__(self):
        self.registry = LoaderRegistry()

    def ingest_document(
        self,
        file_path: str,
    ) -> KnowledgeDocument:

        loader = self.registry.get_loader(file_path)

        return loader.load_document(file_path)