export default function Button({ title }) {
    return (
      <button
        className="text-white relative self-start transition duration-150 before:w-full before:h-[1px] before:content-[''] before:absolute before:bottom-0  before:bg-white hover:text-[#5221E6] hover:before:bg-[#5221E6]"
        type="button"
      >
        {title}
      </button>
    );
  }
  