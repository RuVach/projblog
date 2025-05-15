from fastapi import APIRouter, HTTPException
from models import Article
import json

router = APIRouter()

# Завантаження з JSON-файлу
def load_articles():
    with open("../frontend/data.json", encoding="utf-8") as f:
        return json.load(f)

@router.get("/")
def root():
    return {"message": "Вітаю на блозі зі статтями!"}

@router.get("/articles")
def get_articles():
    return load_articles()

@router.get("/articles/{article_id}")
def get_article(article_id: int):
    articles = load_articles()
    for article in articles:
        if article["id"] == article_id:
            return article
    raise HTTPException(status_code=404, detail="Статтю не знайдено")
