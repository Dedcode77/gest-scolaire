import React, { useState, useEffect, useMemo   } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter} from "react-bootstrap-table2-filter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CSVLink } from 'react-csv';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Table.css"; 
import img from "../img/img.jpeg";



function Table() {
  
//debut data
  const [data, setData] = useState([
    {
      image: img,
      name: "Fatou",
      phoneNumber: "+221 77346573",
      date: "2023-08-07",
      arrivalTime: "10:00",
      status: "eleve",
    },
    {
      image: img,
      name: "Ndiaye",
      phoneNumber: "+221 7674899",
      date: "2023-08-07",
      arrivalTime: "11:00",
      status: "personnel",
    },
    // ... Add more data objects
    {
      image: img,
      name: "Modou",
      phoneNumber: "+00 335346543",
      date: "2023-08-07",
      arrivalTime: "09:30",
      status: "professeur",
    },
    {
      image: img,
      name: "pierre",
      phoneNumber: "+221 757489943",
      date: "2023-08-07",
      arrivalTime: "08:01",
      status: "eleve",
    },
    {
      image: img,
      name: "Ciss",
      phoneNumber: "+221 787489900",
      date: "2023-08-07",
      arrivalTime: "09:00",
      status: "personnel",
    },
    {
      image: img,
      name: "Diouf",
      phoneNumber: "+221 7774895423",
      date: "2023-08-07",
      arrivalTime: "10:30",
      status: "eleve",
    },
    {
      image: img,
      name: "Rual Octe",
      phoneNumber: "+221 7674899213",
      date: "2023-08-07",
      arrivalTime: "07:00",
      status: "professeur",
    },
  ]);
//fin data

//debut customFiltre
  const customNameFilter = textFilter({
    placeholder: "entre le Nom",
    // ...
  });

  const customPhoneNumberFilter = textFilter({
    placeholder: "Entre le Numéro ",
    // ...
  });
  const customDateFilter = textFilter({
    placeholder: "Entre la Date",
    // ...
  });
  const customArrivalTimeFilter = textFilter({
    placeholder: "Entre l'Heure",
  // ...
  });
  const customStatusFilter = textFilter({
    placeholder: "Entre Status",
    // ...
  });
 //fin customFiltre
  
//debut culumns
  const columns = [
    {
      dataField: "image",
      text: "Profil",
      formatter: (cell) => <img src={cell} alt="Avatar" className="image rounded-circle w-2" />,
    },
    {
      dataField: "name",
      text: "Nom",
      filter: customNameFilter, // Apply the custom filter
    },
    {
      dataField: "phoneNumber",
      text: "Numéro de téléphone",
      filter: customPhoneNumberFilter, // Apply the custom filter
    },
    {
      dataField: "date",
      text: "Date",
      filter: customDateFilter, // Apply the custom filter
    },
    {
      dataField: "arrivalTime",
      text: "ArrivalTime",
      filter: customArrivalTimeFilter, // Apply the custom filter
    },
    {
        dataField: "status",
        text: "Status",
        filter: customStatusFilter,
    },
    {
      dataField: 'actions',
      text: 'Actions',    
        formatter: (cell, row) => (   
          <div className="">
            <button className="for" onClick={() => handleAction("hide", row)}>
              <FontAwesomeIcon icon={faEyeSlash} />
            </button>
            <button className="for mx-1 " onClick={() => handleAction("edit", row)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="for" onClick={() => handleAction("delete", row)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ),
    },
    // ... Other column     
  ];
     const handleAction = (action, row) => {
      // Implement your CRUD actions here
      if (action === "hide") {
        // Handle hide action
      } else if (action === "edit") {
        // Handle edit action
      } else if (action === "delete") {
        // Handle delete action
        setData(prevData => prevData.filter(item => item !== row));
      }
     };
// ...fin culumns
    
// ...debut de button reglage des fonctionnalite All, Eleve, professeur 
     const [activeButton, setActiveButton] = useState('All');
     const [filteredData, setFilteredData] = useState(data);
     
     const handleButtonClick = (category) => {
        setActiveButton(category);
    
        if (category === 'All') {
          setFilteredData(data);
        } else {
          const filtered = data.filter(item => item.status === category.toLowerCase());
          setFilteredData(filtered);
        }
      };
// ...fin du button reglage des fonctionnalite All, Eleve, professeur


   // ...debut de reglage  du button export to csv
      const generateCSVData = () => {
        const csvData = [];
        
        // Ajoutez d'abord les en-têtes CSV (correspondant à vos colonnes de données)
        const headers = ["Name", "PhoneNumber", "Date", "ArrivalTime", "Status"];
        csvData.push(headers);

        // Ajoutez les données CSV
        data.forEach((row) => {
          const rowData = [row.name, row.phoneNumber, row.date, row.arrivalTime, row.status];
          csvData.push(rowData);
        });

        return csvData;
      };
   // ...fin de reglage du button export to csv   



  // ...debut de reglage du navTabv
      const [activeTab, setActiveTab] = useState('present'); 
      

      // Utilisez useMemo pour initialiser les variables de données
      const dataPresent = useMemo(() => [
        {
          image: img,
          name: "Fatou",
          phoneNumber: "+221 77346573",
          date: "2023-08-07",
          arrivalTime: "10:00",
          status: "eleve",
        },
        {
          image: img,
          name: "Ndiaye",
          phoneNumber: "+221 7674899",
          date: "2023-08-07",
          arrivalTime: "11:00",
          status: "personnel",
        },
        {
          image: img,
          name: "Modou",
          phoneNumber: "+00 335346543",
          date: "2023-08-07",
          arrivalTime: "09:30",
          status: "professeur",
        },
        {
          image: img,
          name: "pierre",
          phoneNumber: "+221 757489943",
          date: "2023-08-07",
          arrivalTime: "08:01",
          status: "eleve",
        },
        
        // Ajoutez plus d'enregistrements ici
      ], []);

      const dataAbsence = useMemo(() => [
        {
          image: img,
          name: "Modou",
          phoneNumber: "+00 335346543",
          date: "2023-08-07",
          arrivalTime: "09:30",
          status: "professeur",
        },
        {
          image: img,
          name: "pierre",
          phoneNumber: "+221 757489943",
          date: "2023-08-07",
          arrivalTime: "08:01",
          status: "eleve",
        },
        {
          image: img,
          name: "Ciss",
          phoneNumber: "+221 787489900",
          date: "2023-08-07",
          arrivalTime: "09:00",
          status: "personnel",
        },
        // Ajoutez plus d'enregistrements ici
      ], []);

      const dataLate = useMemo(() => [
        {
          image: img,
          name: "Diouf",
          phoneNumber: "+221 7774895423",
          date: "2023-08-07",
          arrivalTime: "10:30",
          status: "eleve",
        },
        {
          image: img,
          name: "Rual Octe",
          phoneNumber: "+221 7674899213",
          date: "2023-08-07",
          arrivalTime: "07:00",
          status: "professeur",
        },
        // Ajoutez plus d'enregistrements ici
      ], []);

  
useEffect(() => {
  const filterData = (data, currentHour, currentMinute) => {
    // Implémentez ici votre logique de filtrage
    // ...

    // Par défaut, retournez toutes les données
    return data;
  };

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Choisissez les données appropriées en fonction de l'onglet actif
  let selectedData = [];
  if (activeTab === 'present') {
    selectedData = dataPresent;
  } else if (activeTab === 'absence') {
    selectedData = dataAbsence;
  } else if (activeTab === 'late') {
    selectedData = dataLate;
  }

  // Filtrer les données et mettre à jour l'état
  const filteredData = filterData(selectedData, currentHour, currentMinute);
  setFilteredData(filteredData);
}, [activeTab, setFilteredData, dataPresent, dataAbsence, dataLate]);

// ...debut de reglage du navTab
  

  return (
    <div className="container">
      <div className="navtab">
        <div className="row">
          <div className="col-md-10 mt-5">
          <Tabs
              activeKey={activeTab}
              onSelect={(tab) => setActiveTab(tab)}
              id="controlled-tab-example"
              className="mb-3 liste"
            >
              <Tab eventKey="present" title="Liste de présence">
                <data data={activeTab === 'present' ? (filteredData || data) : []} columns={columns} />
              </Tab>
              <Tab eventKey="absence" title="Liste d'absence">
                <data data={activeTab === 'absence' ? (filteredData || data) : []} columns={columns} />
              </Tab>
              <Tab eventKey="late" title="Liste de retard">
                <data data={activeTab === 'late' ? (filteredData || dataLate) : []} columns={columns} />
              </Tab>
         </Tabs>
         </div>
          <button type="button" className="btn btn-primar mt-5">
            <CSVLink data={generateCSVData()} filename={"Table_data.csv"}  className="btn-primar text-white" target="_blank">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" className="icon mb-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V15H14.2053V10L12.7848 11.25V13.75H1.42053V1.25H12.7848V3.75L14.2053 5V0H0ZM11.6526 4.375L10.654 5.25375L12.4744 6.875H5.61536V8.125H12.4737L10.654 9.74625L11.6526 10.625L14.716 7.95L15.2032 7.5L14.7153 7.05L11.6519 4.375H11.6526Z" fill="white"/>
            </svg>{" "} Export to CSV
            </CSVLink>
          </button>
        </div>

      <div className="d-grid gap-2 d-md-block mb-5 mt-3 button">
        <button className={`btn btn-lg botton mx-3 ps-5 pe-5 ${activeButton === 'All' ? 'active' : ''}`}
          style={{ backgroundColor: activeButton === 'All' ? '#2D9CDB' : '',
          color: activeButton === 'All' ? 'white' : '', 
          border: activeButton === 'All' ? '2px solid #2D9CDB' : '',
        }}
          onClick={() => handleButtonClick('All')}>All
        </button>

        <button className={`btn btn-lg botton mx-3 ps-5 pe-5 ${activeButton === 'Eleve' ? 'active' : ''}`}
          style={{ backgroundColor: activeButton === 'Eleve' ? '#2D9CDB' : '',
          color: activeButton === 'Eleve' ? 'white' : '', 
          border: activeButton === 'Eleve' ? '2px solid #2D9CDB' : '',
         }}
          onClick={() => handleButtonClick('Eleve')}>Eleve
        </button>

        <button className={`btn btn-lg botton mx-3  ${activeButton === 'Professeur' ? 'active' : ''}`}
          style={{ backgroundColor: activeButton === 'Professeur' ? '#2D9CDB' : '', 
          color: activeButton === 'Professeur' ? 'white' : '', 
          border: activeButton === 'Professeur' ? '2px solid #2D9CDB' : '',}}
          onClick={() => handleButtonClick('Professeur')} >Professeurs
        </button>

        <button className={`btn btn-lg botton mx-3 ${activeButton === 'Personnel' ? 'active' : ''}`}
          style={{ backgroundColor: activeButton === 'Personnel' ? '#2D9CDB' : '', 
          color: activeButton === 'Personnel' ? 'white' : '', 
          border: activeButton === 'Personnel' ? '2px solid #2D9CDB' : '',}}
          onClick={() => handleButtonClick('Personnel')}>Personnels
        </button>

      </div>
    </div>

      <div className="bootstraptable">
        <BootstrapTable
          bootstrap4
          keyField="name"
          data={activeTab === 'present' ? (filteredData || dataPresent) : activeTab === 'absence' ? (filteredData || dataAbsence) : (filteredData || dataLate)} 
          columns={columns}
          striped
          hover
          pagination={paginationFactory({
            sizePerPage: 5,
            sizePerPageList: [5, 10, 20],
            hidePageListOnlyOnePage: true,
          })}
          filter={filterFactory()} // Apply default filter factory
          wrapperClasses="table-responsive"
        />
      </div>
    </div>
  );
}

export default Table;
