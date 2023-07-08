import logo from './logo.svg';
import './App.css';

import Address from './Component/Profile/Address/Address';
import FullName from './Component/Profile/FullName/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <FullName name="Aziz mejri" />
      <ProfilePhoto imageSrc="logo192.png" />
      <Address address="Boulevard 9 Avril" />
    </div>
  );
}

export default App;
