import PropTypes from "prop-types";

function Button({ text, onclick}) {
  return (
    <button className="border rounded-xl border-primary-color bg-primary-color text-primary-text-color h-10 px-8 cursor-pointer" onClick={onclick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};

export default Button;
