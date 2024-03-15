import { useEffect, useState } from 'react';
import { BowlerInfo } from './types/BowlerInfo';

function BowlerList() {
  const [bowlerInfo, setBowlerInfo] = useState<BowlerInfo[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5283/api/BowlersInfo');
      const b = await rsp.json();
      setBowlerInfo(b);
    };
    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h5 className="text-center">Bowlers Info</h5>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerInfo.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{b.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
