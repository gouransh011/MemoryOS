from pathlib import Path

from loaders.pdf_loader import PDFLoader
from loaders.base_loader import BaseLoader


class LoaderRegistry:

    def __init__(self):
        self._loaders = {
            ".pdf": PDFLoader(),
        }

    def get_loader(
        self,
        file_path: str,
    ) -> BaseLoader:

        extension = Path(file_path).suffix.lower()

        loader = self._loaders.get(extension)

        if loader is None:
            raise ValueError(
                f"No loader registered for '{extension}' files."
            )

        return loader