

function ImageComponent({ images }: { images: { src: string; title: string }[] }) {


    return (        

        <>
            {images.map((image, index) => (
                <div key={index} className="bg-cover bg-center">
                    <img src={image.src} alt={image.title} />                    

                    <h2>{image.title}</h2>
                </div>
            ))}
        </>
    );
}

export default ImageComponent;
