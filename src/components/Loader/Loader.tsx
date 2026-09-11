import "../Loader/Loader.css";
export default function Loader() {
  return (
    <div className="loader">
      <div className="loader_cube loader_cube--color"></div>
      <div className="loader_cube loader_cube--glowing"></div>
    </div>
  );
}
