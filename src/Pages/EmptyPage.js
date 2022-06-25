import { Link } from "react-router-dom";
import './Empty.scss';

export default function EmptyPage() {
  return (
    <div id="emptyPage" className="container-fluid">
      <div className="container box">
        <h1>This page could not be found.</h1>
        <button type="button" className="button">
          <Link to="/" className="">
            돌아가기
          </Link>
        </button>
      </div>
    </div>
  )
}