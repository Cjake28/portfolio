import React, {useState} from 'react';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';

const profiles = [
  {
    name: "recruiter",
    image: blueImage,
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif",
  },
  {
    name: "developer",
    image: greyImage,
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif",
  },
  {
    name: "stalker",
    image: redImage,
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif",
  },
  {
    name: "adventurer",
    image: yellowImage,
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif",
  },
];

const watching = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    // handle selection here
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-body text-white" onMouseMove={handleMouseMove}>
      <p className="text-[30px] lg:text-[3.5vw] text-center w-full">Who's Watching?</p>

      <div className="flex flex-wrap justify-center gap-5 mt-10 mb-40">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
      <div
        className="cursor-glow"
        style={{
          left: position.x - 120, // half of width
          top: position.y - 120,
        }}
      />
    </div>
  );
};

export default watching;
