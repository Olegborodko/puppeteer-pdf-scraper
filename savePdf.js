const path = require('path');
const fs = require('fs');
const https = require('https');

function downloadPDF(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest);
      reject(err.message);
    });
  });
};

function createFolder(folder){
  if (!fs.existsSync(path.join(__dirname, folder))) {
    fs.mkdirSync(path.join(__dirname, folder));
  }
}

async function savePdf(url, destPath) {
  const fileName = path.basename(url);

  const pdfPath = path.join(__dirname, destPath, fileName);

  createFolder(destPath);

  try {
    await downloadPDF(url, pdfPath);
    console.log('PDF успешно сохранен:', pdfPath);
  } catch (error) {
    console.error('Ошибка при сохранении PDF:', error);
  }
}

module.exports = savePdf;
