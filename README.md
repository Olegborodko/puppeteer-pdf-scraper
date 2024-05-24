# Puppeteer PDF Scraper

Используется Puppeteer и Node.js 
Выводится информация KATALOGI IN REVIJE
Так-же скачиваются PDF-файлы

## Установка

1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/your-username/puppeteer-pdf-scraper.git
    ```
2. Перейдите в директорию проекта:
    ```bash
    cd puppeteer-pdf-scraper
    ```
3. Установите зависимости:
    ```bash
    npm install
    ```

## Использование

node index.js


## Пример
```
{
  '0': {
    url: 'https://www.tus.si/katalogi/?uid=393',
    name: 'MOJIH 10',
    time: { '0': '2024-05-10', '1': '2024-06-29' },
    pdf: 'https://www.tus.si/app/uploads/catalogues/20240508072707_03_Mojih_10_10.5.-29.6.2024_M3_24_1.pdf'
  },
  '1': {
    url: 'https://www.tus.si/katalogi/?uid=395',
    name: 'AKCIJSKI KATALOG',
    time: { '0': '2024-05-22', '1': '2024-05-28' },
    pdf: 'https://www.tus.si/app/uploads/catalogues/20240520070320_21_AKCIJSKI_LETAK_22.5.-28.5_GNgVtan.pdf'
  }
}

PDF успешно сохранен: /home/oleg/parser-p/uploads/20240508072707_03_Mojih_10_10.5.-29.6.2024_M3_24_1.pdf
PDF успешно сохранен: /home/oleg/parser-p/uploads/20240520070320_21_AKCIJSKI_LETAK_22.5.-28.5_GNgVtan.pdf
```