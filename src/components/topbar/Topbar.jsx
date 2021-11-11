import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const history = useHistory();
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Codination</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for blogs, groups or coders"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={() => history.push("/")}>Homepage</span>
          {/* <span className="topbarLink">Timeline</span> */}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            {/* <span className="topbarIconBadge">1</span> */}
          </div>
          <div className="topbarIconItem" onClick={() => window.location= "https://namastechat.herokuapp.com/chat"}>
            <Chat />
            {/* <span className="topbarIconBadge">2</span> */}
          </div>
          <div className="topbarIconItem">
            <Notifications />
            {/* <span className="topbarIconBadge">1</span> */}
          </div>
        </div>
        <div className="rightProfile">
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
          <span className="profiletext">My Profile</span>
        </Link>
        </div>
      </div>
    </div>
  );
}
