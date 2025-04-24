const Button = (props) => {
  return (
    <button
      className="text-customWhite hover:bg-customLightGreen bg-customDarkGreen transition-all duration-200 text-[20px] py-2 px-3 rounded "
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
