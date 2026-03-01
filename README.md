# AlterCOD Launcher

Launcher Windows officiel pour jouer à tous les Call of Duty gratuitement.

## Prérequis
- Node.js 18+
- npm

## Installation & Développement

```bash
npm install
npm start
```

## Build Windows (.exe installeur)

```bash
npm install
npm run build:win
```

Le fichier `AlterCOD Setup 1.0.0.exe` sera généré dans le dossier `dist/`.

## Structure
```
altercod-launcher/
├── main.js          # Process principal Electron
├── preload.js       # Bridge sécurisé IPC
├── package.json
├── src/
│   ├── index.html   # Interface
│   └── app.js       # Logique UI + données jeux
└── assets/
    ├── icon.ico     # Icône Windows (à ajouter)
    └── icon.png     # Icône PNG (à ajouter)
```

## Ajouter l'icône
Place tes fichiers `icon.ico` et `icon.png` dans le dossier `assets/`.
Format recommandé : 256x256px

## Développé par IKAAM — altercod.fr
