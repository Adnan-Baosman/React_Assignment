import leftArrow from "../assets/images/left_arrow.png";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <img src={leftArrow} alt="Previous" />
    </div>
  );
}

export default PrevArrow;
