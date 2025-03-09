import React from 'react';

interface ReviewCardProps {
  reviewText: string;
  profileImage: string;
  name: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewText, profileImage, name }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        {profileImage && (
          <img src={profileImage} alt={name} className="w-12 h-12 rounded-full mr-3" />
        )}
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-gray-700">{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
