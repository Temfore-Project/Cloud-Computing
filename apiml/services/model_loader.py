import tensorflow as tf

def load_model(model_path):
    return tf.keras.models.load_model(model_path)

def create_tokenizer(data, num_words=5000):
    tokenizer = tf.keras.preprocessing.text.Tokenizer(num_words=num_words)
    tokenizer.fit_on_texts(data)
    return tokenizer

def calculate_max_length(data):
    return max(len(x.split()) for x in data)
