// Dynamically import images
const imagesModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg}', { eager: true });
const images = Object.keys(imagesModules).sort().map(key => imagesModules[key].default);

export const galleryData = images.map((src, index) => ({
    id: index + 1,
    src: src,
    title: `Gallery Item ${index + 1}`,
    description: `Description for gallery item ${index + 1}`
}));
