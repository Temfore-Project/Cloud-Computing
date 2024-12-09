import pandas as pd

def load_and_prepare_data(dataset_path):
    data = pd.read_csv(dataset_path)

    data['text'] = data['Title'] + ' ' + data['Ingredients'] + ' ' + data['Steps']
    return data
