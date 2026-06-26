from abc import ABC, abstractmethod

from knowledge.models import KnowledgeDocument


class BaseLoader(ABC):

    @abstractmethod
    def load_document(
        self,
        file_path: str,
    ) -> KnowledgeDocument:
        """
        Load a file and return a KnowledgeDocument.
        """
        pass