const express = require('express');
const multer = require('multer');
const { db, bucket } = require('./firebaseConfig');  

const app = express();
const port = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.json());

app.post('/addData', async (req, res) => {
  const { collection, data } = req.body;

  try {
    const docRef = await db.collection(collection).add(data);
    res.status(200).json({ message: 'Documento agregado con éxito', id: docRef.id });
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar documento', error });
  }
});

app.post('/uploadFile', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No se ha seleccionado ningún archivo' });
  }

  const file = bucket.file(`uploads/${Date.now()}-${req.file.originalname}`);
  const blobStream = file.createWriteStream({
    resumable: false,
  });

  blobStream.on('error', (err) => {
    res.status(500).send({ message: 'Error al subir el archivo', error: err });
  });

  blobStream.on('finish', () => {
    file.makePublic().then(() => {
      res.status(200).json({
        message: 'Archivo subido correctamente',
        fileUrl: `https://storage.googleapis.com/${bucket.name}/${file.name}`,
      });
    });
  });

  blobStream.end(req.file.buffer);
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
