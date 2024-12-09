from fastapi import FastAPI
from services.data_loader import load_and_prepare_data
from services.model_loader import load_model, create_tokenizer, calculate_max_length
from routes.recommendation import router as recommendation_router
from routes.root import router as root_router
import os
import uvicorn
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Recipe Recommendation API")

DATASET_PATH = "https://storage.googleapis.com/temforeapp-storage/model/Final_Dataset1.csv"
MODEL_PATH = "model/recipe_recommendation_model.h5"

try:
    logger.info("Starting to load dataset from: %s", DATASET_PATH)
    data = load_and_prepare_data(DATASET_PATH)
    logger.info("Dataset loaded successfully.")

    logger.info("Starting to load model from: %s", MODEL_PATH)
    model = load_model(MODEL_PATH)
    logger.info("Model loaded successfully.")

    logger.info("Creating tokenizer from dataset...")
    tokenizer = create_tokenizer(data['text'])
    logger.info("Tokenizer created successfully.")

    logger.info("Calculating max length from dataset...")
    max_length = calculate_max_length(data['text'])
    logger.info("Max length calculated successfully: %d", max_length)

except Exception as e:
    logger.error("An error occurred during initialization: %s", str(e))
    raise RuntimeError("Initialization failed. Please check logs for details.") from e

app.include_router(recommendation_router)
app.include_router(root_router)

port = int(os.environ.get("PORT", 8080))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=port)
