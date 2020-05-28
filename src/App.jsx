import React from 'react';
import './App.css';
import jsonFile from './doc_tracks.json'
import MaterialTable from "material-table";
import Grid from "@material-ui/core/Grid";
import MapIcon from '@material-ui/icons/Map';
import LinkIcon from '@material-ui/icons/Link';


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
                                            Estimated Time: {rowData.walkDuration},
                                        </Grid>
                                        <Grid item>
                                            Difficulty: {rowData.walkTrackCategory.join(', ')}
                                        </Grid>
                                        <Grid item>
                                            Distance: {rowData.distance}
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
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App;
