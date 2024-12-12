# 🌥️ **Cloud Computing Project**  

Cloud Computing in this architecture utilizes Google Cloud Platform (GCP) with services such as Firebase for authentication and firestore for food data, Cloud Run for API management, and Cloud Storage for machine learning models and image data. Users interact through a Kotlin-based application with key features such as a weather API using OpenWeather, machine learning-based recommendations, and data search and details. The system is designed in a modular and scalable manner to ensure optimal performance through the integration of cloud-native services and the ability to provide personalized recommendations in real-time. 

## 📐 **Arsitektur Cloud**  
![Arsitektur Cloud drawio](https://github.com/user-attachments/assets/139cbe14-daab-44e6-9ff2-282091c6b55d)
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
      | lat   | `number`    |
      | lon   | `number`    |
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
      | Key     | Value    |
      |---------|----------|
      | title   | `string` |
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
            "Ingredients": "Bahan Ayam Kecap Panggang:--1 potong ayam bagian dada (bersihkan,beri sedikit perasan lemon)--3 siung bawang putih (ulek halus)--12-15 butir lada hitam (ulek halus)--1 sdt kecap inggris--1 sdm kecap manis--1 sdm olive oil--1/2 sdm extra virgin olive oil/EVOO--Bahan Tumis Jagung Wortel:--1/2 wortel (bersihkan lalu potong kecil)--5 baris jagung (sisir dan bersihkan)--2 siung bawang putih (iris tipis)--2 siung bawang merah (iris tipis)--5 buah cabe rawit (iris serong)--Secukupnya garam--secukupnya Lada bubuk putih--",
            "Steps": "Campurkan semua bahan ayam panggang. Lalu marinasi di kulkas selama 20-30 menit--Panaskan oven, oleskan loyang dengan olive oil. Panggan ayam selama 25-30 menit pada temperatur 180 derajat Celcius, gunakan api atas bawah--Untuk tumisan jagung wortel. Panaskan 2-3 olive oil. Lalu tumis bawang putih, bawang merah dan cabe rawit sampai harum dan agak kecoklatan--Masukkan jagung dan wortel, aduk rata. Lalu beri air matang 1 gelas kecil, lalu diamkan sampai air menyusut--Lalu beri garam dan lada putih. Aduk rata dan koreksi rasa. Lalu sajikaan bersama ayam panggang--",
            "URL": "210_tumis_jagung_wortel_ayam_kecap_panggang.jpg",
            "Type": "Makan Pagi--Makan Siang--Hidangan Utama--Lauk Pauk--Sayur--",
            "Temp(cold)": 0,
            "imageUrl": "https://storage.googleapis.com/temforeapp-storage/data-foods-img/210_tumis_jagung_wortel_ayam_kecap_panggang.jpg"
           },
           {
            "Id": 3160,
            "Category": "sapi",
            "Title": "Iga Sapi Ayam Bakar Madu",
            "Ingredients": "1/2 kg iga sapi--1/2 ayam (bagian paha potong 4)--1 sachet madu (kalo eyke sih madurasa)--Kecap manis--2 sdm margarin--1/2 sdm ketumbar--2 siung bawang merah--3 siung bawang putih--1/2 bawang bombay (ukuran kecil)--1/2 bijipala--1 cm jahe--1 lbr daun salam--2 lbr daun jeruk--Garam--1 bks lada bubuk--Untuk bahan oles:--3 sdm kecap manis--2 sdm madu--3 sdm minyak goreng--",
            "Steps": "Cuci bersih iga & ayam--Rebus daging sapi menggunakan panci biasa dulu gausah terlalu lama hanya untuk menghilangkan darahnya aja lalu Presto iga sapi selama 15 menit dari bunyi (kalo ayamnya ga di presto ya karna nanti hancur)--Ulek semua bahan bumbu halus.. Iris bawang bombay--Tumis bumbu halus dan bawang bombay nya menggunakan margarin.. masukkan juga daun salam & daun jeruknya hingga harum--Bila daging sudah dipresto slama 15 menit tunggu uap di dalam nya hilang baru buka tutup nya--Tuangkan kurang lebih 500ml air kaldu daging ke tumisan--Tes rasa--Masukkan ayam nya dulu ya biar 1/2 empuk (agar iga sapinya ga clopot dari tulangnya haha ga cucooo ah pas di foto kalo dagingnya clopot dari tulangnya)--Tuang 2 sdm madu & secukupnya kecap sesuai selera.. Baru masukkan iga sapi nya--Sambil menunggu air rebusannya sat trus diaduk--Bila airnya sudah sat pindah ke wadah lain--Iga sapi & ayam dioles pakai bumbu oles--Bila panggangan sudah panas tata ayam & iga sapi panggang sambil dibolak balik agar ga gosong--Panggang sesuai keinginan.. Bila sudah dipanggang semua angkat & sajikan dengan sambal goreng terasi--Resep sambalnya ada diresep eyke sebelumnya ya...--",
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
   - method: `GET`
   - endpoint: `/detail`
   - Params:
      | Key   | Value    |
      |-------|----------|
      | id    | `number` |
   - Example: https://temfore-879994394867.asia-southeast2.run.app/detail?id=1
   - Body Response
     ```bash
      {
       "id": "TUzv2hwF27evnTAOzB1y",
        "Id": 1,
       "Category": "ayam",
       "Title": "Ayam Woku Manado",
       "Ingredients": "1 Ekor Ayam Kampung (potong 12)--2 Buah Jeruk Nipis--2 Sdm Garam--3 Ruas Kunyit--7 Bawang Merah--7 Bawang Putih--10 Cabe Merah--10 Cabe Rawit Merah (sesuai selera)--3 Butir Kemiri--2 Batang Sereh--2 Lembar Daun Salam--2 Ikat Daun Kemangi--Penyedap Rasa--1 1/2 Gelas Air--",
       "Steps": "Cuci bersih ayam dan tiriskan. Lalu peras jeruk nipis (kalo gak ada jeruk nipis bisa pake cuka) dan beri garam. Aduk hingga merata dan diamkan selama 5 menit, biar ayam gak bau amis.--Goreng ayam tersebut setengah matang, lalu tiriskan--Haluskan bumbu menggunakan blender. Bawang merah, bawang putih, cabe merah, cabe rawit, kemiri dan kunyit. Oh iya kasih minyak sedikit yaa biar bisa di blender. Untuk sereh nya di geprek aja terus di buat simpul.--Setelah bumbu di haluskan barulah di tumis. Jangan lupa sereh dan daun salamnya juga ikut di tumis. Di tumis sampai berubah warna ya --Masukan ayam yang sudah di goreng setengah matang ke dalam bumbu yang sudah di tumis, dan diamkan 5 menit dulu. Biar bumbu meresap. Lalu tuangkan 1 1/2 Gelas air. Lalu tambahkan penyedap rasa (saya 3 Sdt, tapi sesuai selera ya) koreksi rasa dan Biar kan sampai mendidih--Setelah masakan mendidih, lalu masukan daun kemangi yang sudah di potong potong. Masak lagi sekitar 10 menit. And taraaaaaaaaaaaaaa..... jadi deh Ayam Woku Manadonya.--Oh iyaa kalo mau di tambahkan potongan tomat merah juga bisa ko. Sesuai selera aja yaa buibuuuu --",
       "URL": "1_ayam_woku_manado.jpg",
       "Type": "Makan Siang--Makan Malam--Hidangan Utama--Lauk Pauk--",
       "Temp(cold)": 1,
       "imageUrl": "https://storage.googleapis.com/temforeapp-storage/data-foods-img/1_ayam_woku_manado.jpg"
      }
      ```
     ![image](https://github.com/user-attachments/assets/bbcd3820-9402-455d-9b68-b70867ea42e0)

4. Recommendation
   - method: `GET`
   - endpoint: `/recommend`
   - Params:
      | Key          | Value       |
      |--------------|-------------|
      | CategoryUser | `string`   |
      | TempUser     | `number`  |
      | TimeUser     | `number`  |
   - Example: https://temfore-879994394867.asia-southeast2.run.app/recommend?CategoryUser=sapi&TempUser=20&TimeUser=10
   - Body Response
     ```bash
      {
       "error": false,
       "message": "Recommend fetched successfully",
       "listRecommend": [
        {
            "Id": 3150,
            "Category": "sapi",
            "Title": "Gulai Tetelan Sapi",
            "Ingredients": "500 gr tetelan sapi--1 buah sereh keprek--3 lembar daun salam--4 lembar daun jeruk--3 butir cengkeh--2 sendok makan air asam jawa (dari 3 daging buah asam jawa diberi air panas)--1,5 liter santan (atau 1300 ml air + 1 kotak kara 200 ml)--Garam dan gula--Bumbu halus :--10 buah cabe keriting--8 butir bawang merah--4 siung besar bawang putih--4 butir kemiri--3 cm kunyit--4 cm jahe--4 cm lengkuas--1 sendok makan ketumbar bubuk--1 sendok teh lada bubuk--",
            "Steps": "Tumis bumbu halus dengan minyak goreng, masukkan daun salam, daun jeruk, sereh dan cengkeh aduk hingga wangi, masukkan tetelan aduk rata--Masukkan santan, aduk-aduk sesekali agar santan tidak pecah, jika sudah mendidih kecilkan api sedikit, masukkan air asam jawa, masak hingga matang dan kuah mengental, beri garam, gula, koreksi rasa--Sajikan dengan bawang goreng jika ada--",
            "URL": "3150_gulai_tetelan_sapi.jpg",
            "Type": "Makan Siang--Makan Malam--Hidangan Utama--Lauk Pauk--Sup--",
            "Temp(cold)": 1,
            "imageUrl": "https://storage.googleapis.com/temforeapp-storage/data-foods-img/3150_gulai_tetelan_sapi.jpg",
            "score": 0.9684265851974487
        },
        ...
       ]
      }
      ```
      ![image](https://github.com/user-attachments/assets/0d11959a-88ed-45fd-81c4-f4d2922eea72)

### API Machine Learning
https://recipe-recommendation-api-879994394867.asia-southeast2.run.app
Get Recommend
   - method: `GET`
   - endpoint: `/recommend`
   - Params:
      | Key          | Value       |
      |--------------|-------------|
      | CategoryUser | `string`   |
      | TempUser     | `number`  |
      | TimeUser     | `number`  |
   - Example: https://recipe-recommendation-api-879994394867.asia-southeast2.run.app/recommend?CategoryUser=telur&TempUser=20&TimeUser=10
   - Body Response
     ```bash
     {
     "recommendations": [
        {
            "Id": 5002,
            "Title": "Terik Ayam Tempe Telor",
            "Type": "Makan Pagi--Makan Siang--Makan Malam--Lauk Pauk--Sup--",
            "Temp(cold)": 1.0,
            "score": 0.9987313151359558
        },
        {
            "Id": 5098,
            "Title": "Telur Ceplok Tauco",
            "Type": "Makan Siang--Makan Malam--Lauk Pauk--Sup--",
            "Temp(cold)": 1.0,
            "score": 0.9898269176483154
        },
        ...
       ]
      }
      ```
      ![image](https://github.com/user-attachments/assets/dcb7276e-789c-406c-9040-af181b39121c)

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
