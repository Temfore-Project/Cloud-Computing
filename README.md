# 🌥️ **Cloud Computing Project**  

Cloud Computing in this architecture utilizes Google Cloud Platform (GCP) with services such as Firebase for authentication and firestore for food data, Cloud Run for API management, and Cloud Storage for machine learning models and image data. Users interact through a Kotlin-based application with key features such as a weather API using OpenWeather, machine learning-based recommendations, and data search and details. The system is designed in a modular and scalable manner to ensure optimal performance through the integration of cloud-native services and the ability to provide personalized recommendations in real-time. 

## 📐 **Arsitektur Cloud**  
![Arsitektur Cloud TEMFORE drawio](https://github.com/user-attachments/assets/f8fda563-6743-41aa-b223-d244891978dd)
---

## 🔗 **API**  
### Backend 
https://recipe-recommendation-api-879994394867.asia-southeast2.run.app
1. Cuaca
   - method: `GET`
   - endpoint: `/cuaca`
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
   - method: `GET`
   - endpoint: `/cari`
   - Params:
      | Key     | Value  |
      |---------|--------|
      | title   | ayam   |
   - Example: https://temfore-879994394867.asia-southeast2.run.app/cari?title=ayam
   - Body Response
     ```bash
      {
       {
       "error": false,
       "message": "Search successful",
       "hasilpencarian": [
           {
            "Id": 210,
            "Category": "ayam",
            "Title": "Tumis Jagung Wortel Ayam Kecap Panggang",
            "Ingredients": "Bahan Ayam Kecap Panggang:--1 potong ayam bagian dada (bersihkan,beri sedikit perasan lemon)--3 siung bawang putih (ulek halus)--12-15 butir             lada hitam (ulek halus)--1 sdt kecap inggris--1 sdm kecap manis--1 sdm olive oil--1/2 sdm extra virgin olive oil/EVOO--Bahan Tumis Jagung Wortel:--1/2                   wortel (bersihkan lalu potong kecil)--5 baris jagung (sisir dan bersihkan)--2 siung bawang putih (iris tipis)--2 siung bawang merah (iris tipis)--5 buah                 cabe rawit (iris serong)--Secukupnya garam--secukupnya Lada bubuk putih--",
            "Steps": "Campurkan semua bahan ayam panggang. Lalu marinasi di kulkas selama 20-30 menit--Panaskan oven, oleskan loyang dengan olive oil. Panggan ayam                  selama 25-30 menit pada temperatur 180 derajat Celcius, gunakan api atas bawah--Untuk tumisan jagung wortel. Panaskan 2-3 olive oil. Lalu tumis bawang                   putih, bawang merah dan cabe rawit sampai harum dan agak kecoklatan--Masukkan jagung dan wortel, aduk rata. Lalu beri air matang 1 gelas kecil, lalu diamkan             sampai air menyusut--Lalu beri garam dan lada putih. Aduk rata dan koreksi rasa. Lalu sajikaan bersama ayam panggang--",
            "URL": "210_tumis_jagung_wortel_ayam_kecap_panggang.jpg",
            "Type": "Makan Pagi--Makan Siang--Hidangan Utama--Lauk Pauk--Sayur--",
            "Temp(cold)": 0,
            "imageUrl": "https://storage.googleapis.com/temforeapp-storage/data-foods-img/210_tumis_jagung_wortel_ayam_kecap_panggang.jpg"
           },
           {
            "Id": 3160,
            "Category": "sapi",
            "Title": "Iga Sapi Ayam Bakar Madu",
            "Ingredients": "1/2 kg iga sapi--1/2 ayam (bagian paha potong 4)--1 sachet madu (kalo eyke sih madurasa)--Kecap manis--2 sdm margarin--1/2 sdm ketumbar--2               siung bawang merah--3 siung bawang putih--1/2 bawang bombay (ukuran kecil)--1/2 bijipala--1 cm jahe--1 lbr daun salam--2 lbr daun jeruk--Garam--1 bks lada               bubuk--Untuk bahan oles:--3 sdm kecap manis--2 sdm madu--3 sdm minyak goreng--",
            "Steps": "Cuci bersih iga & ayam--Rebus daging sapi menggunakan panci biasa dulu gausah terlalu lama hanya untuk menghilangkan darahnya aja lalu Presto iga              sapi selama 15 menit dari bunyi (kalo ayamnya ga di presto ya karna nanti hancur)--Ulek semua bahan bumbu halus.. Iris bawang bombay--Tumis bumbu halus dan              bawang bombay nya menggunakan margarin.. masukkan juga daun salam & daun jeruknya hingga harum--Bila daging sudah dipresto slama 15 menit tunggu uap di                  dalam nya hilang baru buka tutup nya--Tuangkan kurang lebih 500ml air kaldu daging ke tumisan--Tes rasa--Masukkan ayam nya dulu ya biar 1/2 empuk (agar iga              sapinya ga clopot dari tulangnya haha ga cucooo ah pas di foto kalo dagingnya clopot dari tulangnya)--Tuang 2 sdm madu & secukupnya kecap sesuai selera..                Baru masukkan iga sapi nya--Sambil menunggu air rebusannya sat trus diaduk--Bila airnya sudah sat pindah ke wadah lain--Iga sapi & ayam dioles pakai bumbu               oles--Bila panggangan sudah panas tata ayam & iga sapi panggang sambil dibolak balik agar ga gosong--Panggang sesuai keinginan.. Bila sudah dipanggang semua             angkat & sajikan dengan sambal goreng terasi--Resep sambalnya ada diresep eyke sebelumnya ya...--",
            "URL": "3160_iga_sapi_ayam_bakar_madu.jpg",
            "Type": "Makan Siang--Makan Malam--Hidangan Utama--Lauk Pauk--",
            "Temp(cold)": 0,
            "imageUrl": "https://storage.googleapis.com/temforeapp-storage/data-foods-img/3160_iga_sapi_ayam_bakar_madu.jpg"
           },
           .......
        }
      }
      ```
     ![image](https://github.com/user-attachments/assets/3067e4cc-db42-448e-8a1a-622850e6b6d0)

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
### `backend` Folder
Move to directory `backend` with command:
```bash
cd backend
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
### `apiml` Folder
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
