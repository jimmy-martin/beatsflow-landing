const LandingPageFooterButton = ({ icon: Icon, text, ...props }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center text-white bg-black border border-white focus:outline-none hover:bg-gray-100 hover:text-black hover:font-bold focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      {...props}
    >
      <Icon className="inline-block mr-2" />
      {text}
    </button>
  );
};

export default LandingPageFooterButton;
