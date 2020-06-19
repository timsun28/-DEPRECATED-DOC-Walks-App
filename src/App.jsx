import React from 'react';
import './App.css';
import jsonFile from './doc_tracks.json'
import MaterialTable from "material-table";
import Grid from "@material-ui/core/Grid";
import MapIcon from '@material-ui/icons/Map';
import LinkIcon from '@material-ui/icons/Link';

import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'


class App extends React.Component {
    state = {data: jsonFile}
    render() {
        return (
            <div className="App">
                <Grid container justify="center">
                    <Grid item xs={12} lg={9}>
                        <MaterialTable
                            columns={[
                                {
                                    title: 'Name',
                                    field: 'name',
                                },
                                {
                                    title: 'Region',
                                    field: 'region',
                                },
                                {
                                    title: 'Location',
                                    field: 'locationString',
                                },
                                {
                                    title: 'Duration',
                                    field: 'walkDuration',
                                },
                            ]}
                            data={this.state.data}
                            title="DOC Tracks"
                            detailPanel={rowData => {
                                return (
                                    <Grid container direction="column"
                                          justify="flex-start"
                                          alignItems="flex-start">
                                        <Grid item xs={12}>
                                            {rowData.introduction}
                                        </Grid>
                                        <Grid item>
                                            <b>Estimated Time: </b> {rowData.walkDuration},
                                        </Grid>
                                        <Grid item>
                                            <b>Difficulty: </b> {rowData.walkTrackCategory.join(', ')}
                                        </Grid>
                                        <Grid item>
                                            <b>Distance: </b>{rowData.distance}
                                        </Grid>
                                        <Grid item>
                                            <a href={'https://www.google.com/maps/search/?api=1&query=' + rowData.lat + ',' + rowData.lon}><MapIcon/> Maps</a>
                                        </Grid>
                                        <Grid item>
                                            <a target="_blank" rel="noopener noreferrer" href={rowData.staticLink}><LinkIcon/>DOC</a>
                                        </Grid>
                                    </Grid>
                                )
                            }}
                            onRowClick={(event, rowData, togglePanel) => togglePanel()}
                            options={{grouping: true, pageSize: 20}}
                            icons={{ 
            Check: Check,
            DetailPanel: ChevronRight,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
            ThirdStateCheck: Remove,
          }}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App;
