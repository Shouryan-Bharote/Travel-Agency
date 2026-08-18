

function ImageComponent({ images }: { images: { src: string; title: string }[] }) {
    return (










                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {images.map((image, index) => (
                <div key={index} className="bg-cover bg-center">
                    <img src={image.src} alt={image.title} />                    

                    <h2>{image.title}</h2>
                </div>
              ))}
        </div>
    );
}

export default ImageComponent;
