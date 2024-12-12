# 🌥️ **Cloud Computing Project**  

Cloud Computing in this architecture utilizes Google Cloud Platform (GCP) with services such as Firebase for authentication and firestore for food data, Cloud Run for API management, and Cloud Storage for machine learning models and image data. Users interact through a Kotlin-based application with key features such as a weather API using OpenWeather, machine learning-based recommendations, and data search and details. The system is designed in a modular and scalable manner to ensure optimal performance through the integration of cloud-native services and the ability to provide personalized recommendations in real-time. 

## 📐 **Arsitektur Cloud**  
![Arsitektur Cloud TEMFORE drawio](https://github.com/user-attachments/assets/f8fda563-6743-41aa-b223-d244891978dd)
---

## 🔗 **API**  
### Backend 
https://recipe-recommendation-api-879994394867.asia-southeast2.run.app
1. Cuaca
- method:
- endpoint
- Params:
   | Key   | Value       |
   |-------|-------------|
   | lat   | -6.200000   |
   | lon   | 106.816666  |
- Example: https://temfore-879994394867.asia-southeast2.run.app/cuaca?lat=-6.200000&lon=106.816666
- Body Response
  ```bash
   {
    "location": "Jakarta, ID",
    "description": "few clouds",
    "icon": "https://openweathermap.org/img/wn/02d@2x.png",
    "temperature": 32.62,
    "cloudiness": 20
   }
   ```
  ![image](https://github.com/user-attachments/assets/ad85ccef-dcf0-4c18-964e-60ab2d5b06d2)

2. Search

3. Detail

4. Recommendation

**API Machine Learning**: [Akses API ML di sini](https://temfore-879994394867.asia-southeast2.run.app)  

---

## 🚀 **Get Started**  
### Clone `repository` with command:  
```bash
git clone https://github.com/Temfore-Project/Cloud-Computing.git
```
--
### `Backend` Folder
Move to directory `Backend` with command:
```bash
cd Backend
```
Install `dependencies` with command:
```bash
npm install
```
insert `service-account.json`
Running the `server` with command:
```bash
npm run start
```
--
### `APIML` Folder
Move to directory `apiml` with command:
```bash
cd apiml
```
Install `libraries` with command:
```bash
pip install -r requirements.txt
```
Make sure the model is saved in .h5 format, put it in the model folder
Running the `server` with command:
```bash
python app.py
```

--- 
