import Image from "next/image";

interface CardProps {
  thumb: string;
  title: string;
  description: string;
}

const Card = ({ thumb, title, description }: CardProps) => {
  return (
    <article className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <Image
          src={thumb} // thumb: "/card-thumbnails/thumbnail1.png"
          alt={`preview of project "${title}"`}
          width={350}
          height={200}
          priority // if this image is above the fold
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Card;
