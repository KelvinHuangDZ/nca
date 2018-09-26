import React, { Component } from 'react';

class NewsTable extends Component {
  render() {
    const { data, id, heading } = this.props;
    //console.log(heading);
    return <table className="table" id={id}>
      <thead>
        <tr>
          <th>{heading}</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map(item => (
          <tr key={item._id}>
            <td>
              {item.time && (<span className="news-time">{item.time} | </span>)}
              {!item.time && (<span className="news-id">{item._id}. </span>)}
              {item.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  };

}

export default NewsTable;
