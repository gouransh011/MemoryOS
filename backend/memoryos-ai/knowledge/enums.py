from enum import Enum


class FileType(str, Enum):
    PDF = "pdf"
    DOCX = "docx"
    TXT = "txt"
    MP3 = "mp3"
    WAV = "wav"
    TRANSCRIPT = "transcript"


class ContentType(str, Enum):
    MEETING = "meeting"
    CUSTOMER_CALL = "customer_call"
    REQUIREMENT = "requirement"
    CONTRACT = "contract"
    SOP = "sop"
    DESIGN_DOC = "design_doc"
    TECHNICAL_DOC = "technical_doc"
    OTHER = "other"