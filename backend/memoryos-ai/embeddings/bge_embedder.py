from sentence_transformers import SentenceTransformer

from embeddings.base_embedder import BaseEmbedder


class BGEEmbedder(BaseEmbedder):

    def __init__(self):
        self.model = SentenceTransformer(
            "BAAI/bge-small-en-v1.5"
        )

    def embed(
        self,
        text: str,
    ) -> list[float]:

        embedding = self.model.encode(
            text,
            normalize_embeddings=True,
        )

        return embedding.tolist()