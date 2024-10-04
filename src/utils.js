export const initializeTiles = () => {
    const colors = ['red', 'blue'];
         const titleArray = [...colors, ...colors]
         .map(color => ({color, id: Math.random() }))
         .sort(() => Math.random() - 0.5);
    return titleArray
}