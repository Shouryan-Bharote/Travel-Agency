function ImageComponent({ images }: { images: { src: string; title: string }[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div key={index} className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg shadow-lg">
                    <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
                        <h2 className="text-lg font-semibold">{image.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ImageComponent;
