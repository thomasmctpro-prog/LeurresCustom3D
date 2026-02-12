export const availableLures = [
    {
        id: 'shad',
        name: 'Shad Classique',
        modelPath: null, // null = utilise la forme par défaut
        description: 'Leurre souple polyvalent, idéal pour le brochet et le sandre. Nage fluide et réaliste.',
        price: 12.99,
        hookPosition: [2.2, 0, 0],
        hookRotation: [0, 0, -Math.PI / 2]
    },
    {
        id: 'finess',
        name: 'Finess Minnow',
        modelPath: null,
        description: 'Leurre effilé pour les pêches difficiles. Parfait pour la perche et le black-bass en drop-shot.',
        price: 10.50,
        hookPosition: [2.2, 0, 0],
        hookRotation: [0, 0, -Math.PI / 2]
    },
    {
        id: 'articulated',
        name: 'Leurre Articulé',
        modelPath: '/models/leurre.articule.STL',
        description: 'Action de nage fluide en S. Idéal pour déclencher l\'agressivité des gros prédateurs.',
        price: 15.90,
        hookPosition: [0, -5.3, 0], // Ajusté à -5.3
        hookRotation: [0, 0, 0] // Orienté vers le bas
    },
    {
        id: 'craw',
        name: 'Craw Creature',
        modelPath: null,
        description: 'Imitation d\'écrevisse réaliste. Redoutable sur les poissons éduqués cherchant une proie sur le fond.',
        price: 13.90,
        hookPosition: [2.2, 0, 0],
        hookRotation: [0, 0, -Math.PI / 2]
    },
    {
        id: 'frog',
        name: 'Topwater Frog',
        modelPath: null,
        description: 'Leurre de surface anti-herbe. L\'arme ultime pour les zones encombrées et les attaques explosives.',
        price: 14.50,
        hookPosition: [2.2, 0, 0],
        hookRotation: [0, 0, -Math.PI / 2]
    },
];
