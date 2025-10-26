const BlurCircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto" }) => {
  return (
    <div
      className="absolute z-10 h-[120px] w-[120px] rounded-full bg-orange-500/30 blur-2xl"
      style={{ top, left, right, bottom }}
    />
  );
};

export default BlurCircle;
