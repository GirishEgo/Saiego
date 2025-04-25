import { useLoader } from "../context/LoaderContext";
// import "./Loader.css"; // your custom styles

export default function Loader() {
  const { loading } = useLoader();

  return loading ? (
    <div className="loader-overlay">
      <div className="loader" />
    </div>
  ) : null;
}
