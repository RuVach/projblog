from pydantic import BaseModel

class Article(BaseModel):
    id: int
    title: str
    content: str
    summary: str