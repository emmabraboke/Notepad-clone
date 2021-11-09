import {GrFormSearch} from 'react-icons/gr'

const Search = () => {
    return (
        <div>
            <div className="search-container">
                <GrFormSearch className="form-search"/><input className="search" placeholder="Search Notes"/>
            </div>
        </div>
    )
}

export default Search
