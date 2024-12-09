import pandas as pd
import tensorflow as tf

def recommend_recipe(data, model, tokenizer, max_length, CategoryUser, TempUser, TimeUser):
    temp_condition = 1 if TempUser <= 27 else 0

    if 6 <= TimeUser < 10:
        type_condition = "Makan Pagi"
    elif 11 <= TimeUser < 14:
        type_condition = "Makan Siang"
    elif 18 <= TimeUser < 21:
        type_condition = "Makan Malam"
    else:
        type_condition = None  

    filtered_data = data[(data['Category'] == CategoryUser) & (data['Temp(cold)'] == temp_condition)]

    if type_condition:
        filtered_data = filtered_data[filtered_data['Type'].str.contains(type_condition)]

    def get_prediction_score(text):
        seq = tokenizer.texts_to_sequences([text])
        padded_seq = tf.keras.preprocessing.sequence.pad_sequences(seq, maxlen=max_length, padding='post')
        return model.predict(padded_seq).max()

    filtered_data['score'] = filtered_data['text'].apply(get_prediction_score)

    recommendations = filtered_data[['Id', 'Title', 'Type', 'Temp(cold)', 'score']].sort_values(by='score', ascending=False)

    return recommendations.head(12).to_dict(orient='records')
