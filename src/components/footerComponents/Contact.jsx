const Contact = (props) => {
  return (
    <div className="flex gap-3 items-center opacity-50 hover:opacity-100 transition-all duration-200">
      <div>{props.icon}</div>
      <div>
        <p className="text-[20px] text-customWhite dark:text-customBlack">
          {props.title}
        </p>
        {props.children}
      </div>
    </div>
  );
};

export default Contact;
