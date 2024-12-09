from fastapi import APIRouter, HTTPException, Query
from services.recommender import recommend_recipe

router = APIRouter()

from app import data, model, tokenizer, max_length

@router.get("/recommend")
async def get_recommendations(
    CategoryUser: str = Query(..., description="Kategori makanan, misalnya 'ayam'"),
    TempUser: int = Query(..., description="Suhu pengguna, misalnya 20"),
    TimeUser: int = Query(..., description="Waktu pengguna, misalnya 10")
):
    try:
        recommendations = recommend_recipe(
            data, model, tokenizer, max_length, CategoryUser, TempUser, TimeUser
        )
        return {"recommendations": recommendations}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
