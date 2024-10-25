import { useState } from 'react';
import Leftsidebar from '../../Components/Left-sidebar/Leftsidebar.jsx';
import { useParams } from 'react-router';
import moment from 'moment';
import Avatar from "../../components/Avatar/Avatar.jsx";
import Editprofileform from "./Editprofileform.jsx";
import Profilebio from './Profilebio.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Userprofile({ slidein }) {
  const { id } = useParams();
  const [Switch, setSwitch] = useState(false);
  const users = useSelector((state) => state.usersreducer);
  
  // Use optional chaining to avoid errors if user is undefined
  const currentprofile = users?.length ? users.find((user) => user._id === id) : null;
  
  const currentuser = useSelector((state) => state.currentuserreducer);
  
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein} />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              {currentprofile ? (
                <>
                  <div className='initial'>
                    {currentprofile.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="user-name">
                    <h1>{currentprofile?.name}</h1>
                    <p>
                      <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                      {moment(currentprofile?.joinedon).fromNow()}
                    </p>
                  </div>
                </>
              ) : (
                <p>Loading profile...</p>
              )}
            </div>
            {currentuser?.result?._id === id && (
              <button className="edit-profile-btn" type='button' onClick={() => setSwitch(true)}>
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <Editprofileform currentuser={currentuser} setswitch={setSwitch} />
            ) : (
              currentprofile && <Profilebio currentprofile={currentprofile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
}

export default Userprofile;
