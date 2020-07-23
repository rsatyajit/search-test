import React from 'react';
import { dataHandler } from "../model/modelHandler";
import Sublist from './Sublist';
// import Pagination from './pagination';
class List extends React.Component {
    state = {
        data: [],
        search: "",
        page: 1,
        limit: 10,
        totalItems: 0
    };

    componentDidMount() {
        this.bindingData();
    }

    dropDownHandler = (event) => {
        console.log(event.target.value);
        this.setState({ limit: event.target.value }, () => this.bindingData());
    }
    searchHandler = () => {
        this.setState({ data: [], page: 1 }, () => this.bindingData())
    }
    paginateHandler = (page) => {
        this.setState({ page: page }, () => this.bindingData());
    }

    bindingData = () => {
        let options = { language: this.state.search, page: this.state.page, limit: this.state.limit }
        new dataHandler().fetchGitrepos(options).then(response => {
            console.log(response)
            if (response && response.status === 200) {
                this.setState(prevState => ({
                    data: [...prevState.data, ...response.data.items]
                }))
                this.setState({ totalItems: response.data.total_count })
                this.storeSearchResults();
            } else {
                this.setState({ data: [], totalItems: 0 });
                this.storeSearchResults();
            }

        });
    }

    storeSearchResults = () => {
        new dataHandler().setSearchResults(this.state)
    }

    inputHandler = (event) => {
        this.setState({ search: event.target.value })
    }


    loadMoreHandler = () => {
        this.setState(prevState => {
            return { page: prevState.page + 1 }
        }, () => this.bindingData())
    }

    render() {
        let sublist = null;
        sublist =
            this.state.data.length > 0 ?
                this.state.data.map((item, index) => <Sublist key={item.id} item={item} index={index} />) :
                <tr>No records found</tr>
        return (
            <div className="sections_all_listing">
                <div className="table_header">
                    <div className="contents_search">
                        Search by language :
                        <input type="text" className="search_field" name="search" value={this.state.search} onChange={this.inputHandler} />
                        <button onClick={this.searchHandler}>search</button>
                    </div>
                </div>
                <div className="form_section ">
                    <div className="table-responsive">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sublist}
                            </tbody>
                        </table>
                    </div>
                </div>
                {this.state.data.length > 0 ?
                    <div><span className="lower">  <button onClick={this.loadMoreHandler}>load more</button> {this.state.totalItems - this.state.data.length}  more records left</span></div>
                    : ""
                }

            </div>
        );
    }

}

export default List;
