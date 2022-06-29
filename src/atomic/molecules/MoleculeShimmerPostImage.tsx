import React, { useEffect, useState } from 'react';

type MoleculeShimmerPostImageProps = {
  postTitle: string;
};

export const MoleculeShimmerPostImage: React.FC<MoleculeShimmerPostImageProps> = ({
  postTitle,
}) => {
  const [imageURL, setImageURL] = useState<string>('');

  useEffect(() => {
    (async () => {
      const { url } = await fetch('https://picsum.photos/1000/600');
      setImageURL(url);
    })();
  }, []);

  return (
    <div className="min-h-min w-full max-w-4xl">
      {imageURL ? (
        <img
          src={imageURL}
          alt={postTitle}
          className="rounded-md shadow"
          loading="lazy"
        />
      ) : (
        <div className="bg-imob-blue-200 animate-pulse w-[100%] h-48 sm:h-80 md:h-[450px] rounded-md duration-75" />
      )}
    </div>
  );
};
