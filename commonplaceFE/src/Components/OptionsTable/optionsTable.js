import React from 'react'; 
import './optionsTable.css';
import { BiEdit, BiTrash } from "react-icons/bi";
import { IconContext } from 'react-icons';

export default class OptionsTable extends React.Component {

  render() {
    const { items, onDelete, onEdit, tableLabel, mainField } = this.props;
    return (
      <div className="options-table-container">
        <table className="options-table">
          <thead>
            <tr>
              <th>{tableLabel}</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index)=> {
              return (
                <tr key={index}>
                  <td style={{ borderLeft: "2px solid #dddddd" }}>{item[mainField]}</td>
                  <td style={{ borderRight: "2px solid #dddddd" }}>
                    <IconContext.Provider value={{ style: {fontSize: '15px', verticalAlign: "middle"}}}>
                      <button
                        className="table-options-button"
                        onClick={() => onEdit(item)}
                      ><BiEdit/></button>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ style: {fontSize: '15px', verticalAlign: "middle"}}}>
                      <button
                        className="table-options-button"
                        onClick={() => onDelete(item)}
                      ><BiTrash/></button>
                    </IconContext.Provider>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

}