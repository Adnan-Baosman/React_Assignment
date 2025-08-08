import rightArrow from "../assets/images/right_arrow.png";

export function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <img src={rightArrow} alt="Next" />
    </div>
  );
}
