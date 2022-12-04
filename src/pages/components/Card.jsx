import { useNavigate } from "react-router-dom";
function Card({ nameProps, ageProps }) {
  const navigate = useNavigate();
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full font-mono mb-16">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className=" text-white text-center text-2xl font-bold">
          FaoTech's member
        </h2>
        <p class="text-xl">
          {nameProps}, {ageProps} years old
        </p>

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/appform");
            }}
          >
            Start your course now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
