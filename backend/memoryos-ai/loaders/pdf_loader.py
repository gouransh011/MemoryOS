from pathlib import Path
from uuid import uuid4

from pypdf import PdfReader

from knowledge.models import KnowledgeDocument
from knowledge.enums import FileType, ContentType

from loaders.base_loader import BaseLoader


class PDFLoader(BaseLoader):

    def load_document(
        self,
        file_path: str,
    ) -> KnowledgeDocument:

        path = Path(file_path)

        if not path.exists():
            raise FileNotFoundError(f"File not found: {file_path}")

        reader = PdfReader(path)

        pages = []

        for page in reader.pages:
            text = page.extract_text()

            if text:
                pages.append(text)

        full_text = "\n".join(pages)

        metadata = {
            "filename": path.name,
            "page_count": len(reader.pages),
            "source": "pdf",
        }

        return KnowledgeDocument(
            id=str(uuid4()),
            title=path.stem,
            text=full_text,
            file_type=FileType.PDF,
            content_type=ContentType.OTHER,
            metadata=metadata,
        )