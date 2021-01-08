import React,{useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider,{Search} from 'react-bootstrap-table2-toolkit';
import SongService from './SongService';
import './MusicListComponent.css';
import CreateSongModal from "./CreateSongModal";




function MusicListComponent(props) {

    const ref = useRef(null);

    const [songs, setSongs] = useState([]);
    const { SearchBar } = Search;

    const buttons = (row) => (
        <>
            {/* <button onClick={() => { ref.current.handleShow(row) }} className="btn btn-primary" id="editButton">Edytuj</button>
            <button onClick={() => { submit(row.id) }} className="btn btn-danger" id="deleteButton">Usuń</button> */}
        </>
    )

    const columns = [{
        dataField: 'id',
        text: 'ID',
        headerStyle: (colum, colIndex) => {
            return { color: "white", textAlign: 'center' };
        }
      }, {
        dataField: 'artist',
        text: 'Artist',
        headerStyle: (colum, colIndex) => {
            return { color: "white", textAlign: 'center' };
        }
      }, {
        dataField: 'title',
        text: 'Song Title',
        headerStyle: (colum, colIndex) => {
            return { color: "white", textAlign: 'center' };
        }
      },{
        text: 'DELETE / EDIT',
        isDummyField: true,
        formatter: (cell, row, rowIndex) => {
            return buttons(row);
        },
        headerStyle: (colum, colIndex) => {
            return { color: "white", width: "20%", textAlign: 'center' };
        }
      }];

      useEffect(() => {
            SongService.getSongs().then((res) => {
                setSongs(res.data);
                console.log(res.data);
            });
    }, [setSongs])

    return (
        <div id="containerSongList">
 
        <div id="modalContent">

            <CreateSongModal ref={ref}/>
        </div>
        <h1 className="text-center">MusicU</h1>
        <div id="table">
        <div className="row">

            <ToolkitProvider
                keyField="id"
                data={songs}    
                columns={columns}
                search

            >
                {
                    props => (
                        <div>
 

                            <SearchBar {...props.searchProps}
                                placeholder="Search..." />
                            <hr />
                            <BootstrapTable
                                {...props.baseProps}
                                pagination={ paginationFactory() }
                                hover
                            />
                        </div>
                    )
                }
            </ToolkitProvider>

            
        </div>
        </div>
        <button id="addSongButton" className="btn btn-primary" onClick={() => ref.current.handleShow()}>Add Song</button>
    </div>
    );
}

export default MusicListComponent;