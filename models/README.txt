# Gestion des Modèles 3D

Pour ajouter ou modifier des leurres sur le site :

1.  **Ajouter le fichier STL** :
    Copiez votre fichier (ex: `super-leurre.stl`) dans le dossier :
    `C:\Users\thoma\.gemini\antigravity\scratch\lure-shop\public\models\`

2.  **Enregistrer le leurre dans le site** :
    Ouvrez le fichier `C:\Users\thoma\.gemini\antigravity\scratch\lure-shop\src\pages\Customizer.jsx` avec un éditeur de texte.

3.  **Modifier la liste** :
    Cherchez la liste `availableLures` au début du fichier et ajoutez une ligne comme ceci :

    ```javascript
    const availableLures = [
      { id: 'shad', name: 'Shad Classique', filename: '/models/lure.stl', description: 'Polyvalent...' },
      // ... autres leurres ...
      
      // AJOUTEZ VOTRE LIGNE ICI :
      { id: 'mon-nouveau', name: 'Mon Super Leurre', filename: '/models/super-leurre.stl', description: 'Description courte' },
    ];
    ```

4.  Sauvegardez. Le site se mettra à jour automatiquement !
