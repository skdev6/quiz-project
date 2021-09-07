import classes from "../styles/Videos.module.css";
import Video from "./Video";
import {Link} from 'react-router-dom';
export default function Videos() {
  return (
    <div className={classes.videos}>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
      <Link to="/quize">
        <Video />
      </Link>
    </div>
  );
}