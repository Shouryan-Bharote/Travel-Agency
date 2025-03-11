interface ReviewCardProps {
    reviewText: string;
    profileImage: string;
    name: string;
}

const ReviewCard = ({ reviewText, profileImage, name }: ReviewCardProps) => {
    return (
        <div className="h-[30vh] w-auto border p-4 rounded-lg shadow-md flex flex-col items-center justify-center m-3 ">
            <p className="">{reviewText}</p>
            
            <img src={profileImage} alt={name} className="w-16 h-16 rounded-full" />
            <h3 className="font-bold">{name}</h3>
            
        </div>
    );
}

export default ReviewCard;
