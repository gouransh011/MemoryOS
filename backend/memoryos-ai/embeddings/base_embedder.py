from abc import ABC, abstractmethod


class BaseEmbedder(ABC):

    @abstractmethod
    def embed(self, text: str) -> list[float]:
        """
        Generate an embedding for the given text.
        """
        pass