function SingleColorPicker({ color, value, onChange }) {
  return (
    <div className="rgb-color">
      <div style={{ backgroundColor: color, width: 30, height: 30 }}></div>
      <p>{color}:</p>
      <input
        type="number"
        min={0}
        max={255}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default SingleColorPicker;
